import { FontAwesome5 } from "@expo/vector-icons"
import { Link, Tabs, Stack } from "expo-router"
import { Pressable, useColorScheme } from "react-native"
import { NativeBaseProvider, Text, Box } from "native-base"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"

import Colors from "./constants/Colors"

export const unstable_settings = {
  // Ensure that reloading on `/onboarding` keeps a back button present.
  initialRouteName: "index",
}

export default function OnboardingLayout() {
  const colorScheme = useColorScheme()

  return (
    <NativeBaseProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        ></Stack>
      </ThemeProvider>
    </NativeBaseProvider>
  )
}
