import { useState, useContext, useRef, useEffect, ComponentType } from "react"
import { TouchableOpacity, StatusBar, ActivityIndicator } from "react-native"
import { NativeBaseProvider, VStack, ScrollView, Box, Text } from "native-base"
import { Stack, useRouter, Link, useLocalSearchParams } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { modeTheme, themes } from "../../../../../constants/Themes"
import { ThemeContext } from "../../../../../constants/ThemeContext"
import servicesData from "../../../../../constants/services"
import Recharge from "../../../../../components/services/Recharge"
import ComingSoon from "../../../../../components/services/ComingSoon"
import Data from "../../../../../components/services/Data"
import { useQuery } from "@tanstack/react-query"

interface ThemeProps {
  mode: {
    backgroundColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
  }
}

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`
export default function RechargeScreen() {
  const { mode, theme } = useContext(ThemeContext)
  const { id } = useLocalSearchParams<{ id: string }>()
  const numId = id && parseInt(id, 10)

  // Retrieve the corresponding service from the servicesData array based on the id
  const { isLoading, error, data } = useQuery({
    queryKey: ["service", id],
    queryFn: () => servicesData.find((s) => s.id === numId),
  })

  if (isLoading) return <ActivityIndicator />

  if (error) return "An error has occurred: "

  if (data) {
    // console.log("The full data object:", data)
    data.optionGroups.forEach((optionGroup, index) => {
      console.log(`Options for option group #${index + 1}:`)
      optionGroup.options.forEach((option, optionIndex) => {
        console.log(`  Option #${optionIndex + 1}:`, option)
      })
    })
  }

  // const service = servicesData.find((s) => s.id === numId)

  // Define a component mapping object
  const componentMapping: { [key: string]: JSX.Element } = {
    "Airtime Recharge": data ? (
      <Recharge service={data} />
    ) : (
      <ActivityIndicator />
    ),
    "Data Purchase": <Data />,
  }
  // Retrieve the corresponding component from the mapping object
  const ComponentToRender = data ? componentMapping[data.title] : null

  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        {ComponentToRender ? ComponentToRender : <ComingSoon />}
      </Container>
    </NativeBaseProvider>
  )
}
