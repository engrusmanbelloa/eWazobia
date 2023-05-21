import { FontAwesome5 } from "@expo/vector-icons"
import { Link, Tabs, Stack } from "expo-router"
import { Pressable, useColorScheme } from "react-native"

import Colors from "../../constants/Colors"

export const unstable_settings = {
  // Ensure that reloading on `/onboarding` keeps a back button present.
  initialRouteName: "index",
}

export default function OnboardingLayout() {
  const colorScheme = useColorScheme()

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  )
}
