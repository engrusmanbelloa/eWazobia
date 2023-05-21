import FontAwesome from "@expo/vector-icons/FontAwesome"
import { NativeBaseProvider, Text, Box } from "native-base"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { useEffect } from "react"
import { useColorScheme } from "react-native"
import OnboardingLayout from "./(onboarding)/_layout"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

const isLoggedIn = true
const isToken = false
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(main)",
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error, isLoggedIn])

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <>{isLoggedIn ? <RootLayoutNav /> : <OnboardingLayout />}</>}
    </>
  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <>
      <NativeBaseProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack
          // screenOptions={{
          //   headerShown: false,
          // }}
          >
            <Stack.Screen name="(main)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </ThemeProvider>
      </NativeBaseProvider>
    </>
  )
}
