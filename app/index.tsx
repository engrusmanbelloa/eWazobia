import { useRootNavigationState } from "expo-router"
import { useRouter, useSegments } from "expo-router"
import { useEffect } from "react"
import React from "react"
import { Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthStore } from "../config/store"

const Index = () => {
  const segments = useSegments()
  const router = useRouter()
  const { isLoggedIn, hasEverLoggedIn, hasDoneKYC } = AuthStore.useState(
    (s) => s
  )
  const navigationState = useRootNavigationState()

  useEffect(() => {
    if (!navigationState?.key) return

    const inAuthGroup = segments[0] === "(auth)"
    const checkFirstVisit = async () => {
      try {
        await AsyncStorage.removeItem("isFirstVisit")
        const isFirstVisit = await AsyncStorage.getItem("isFirstVisit")

        console.log("isFirstVisit: ", isFirstVisit)
        if (isFirstVisit == null) {
          // redirect to the onboarding page if it's their first visit.
          await AsyncStorage.setItem("isFirstVisit", "true")
          const isComeBack = await AsyncStorage.getItem("isFirstVisit")
          console.log("isComeBack: ", isComeBack)

          router.replace("/welcome")
        } else if (!isLoggedIn && !inAuthGroup) {
          // If the user is not signed in and the initial segment is not in the auth group,
          router.replace("/login")
        } else if (isLoggedIn && !hasDoneKYC) {
          // If the user is signed in, but has not done kyc go to the tabs root.
          router.replace("/(kyc)")
        } else if (isLoggedIn && hasDoneKYC) {
          // If the user is signed in, go to the tabs root.
          router.replace("/(main)")
        }
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    checkFirstVisit()
  }, [isLoggedIn, segments, navigationState?.key])

  return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>
}
export default Index
