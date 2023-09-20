import FontAwesome from "@expo/vector-icons/FontAwesome"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { useEffect, useContext } from "react"
import { ThemeProvider, ThemeContext } from "../constants/ThemeContext"
import { SafeAreaView, StyleSheet, View } from "react-native"
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { modeTheme, themes } from "../constants/Themes"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

const queryClient = new QueryClient()

export default function RootLayout() {
  const { mode, theme } = useContext(ThemeContext)
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SpaceMonoBoldItalic: require("../assets/fonts/SpaceMono-BoldItalic.ttf"),
    SpaceMonoItalic: require("../assets/fonts/SpaceMono-Italic.ttf"),
    InclusiveSans: require("../assets/fonts/InclusiveSans-Regular.ttf"),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  return (
    <StyledThemeProvider theme={{ mode: modeTheme[mode], themes }}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Stack screenOptions={{ headerShown: false }} />
        </QueryClientProvider>
      </ThemeProvider>
    </StyledThemeProvider>
  )
}
