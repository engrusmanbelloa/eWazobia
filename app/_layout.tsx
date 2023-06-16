import FontAwesome from "@expo/vector-icons/FontAwesome"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { useEffect, useContext } from "react"
import { ThemeProvider, ThemeContext } from "../constants/ThemesState"
import { modes, themes } from "../constants/Themes"
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export default function RootLayout() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
  }
  const selectTheme = (selectedTheme: string) => {
    setTheme(selectedTheme)
  }

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  return (
    <ThemeProvider>
      <StyledThemeProvider theme={{ mode: mode, themes }}>
        <Stack screenOptions={{ headerShown: false }} />
      </StyledThemeProvider>
    </ThemeProvider>
  )
}
