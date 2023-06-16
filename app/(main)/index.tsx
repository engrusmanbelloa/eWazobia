import { useState, useContext, useEffect, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native"
import { ThemeContext } from "../../constants/ThemesState"
import { themes } from "../../constants/Themes"
import {
  NativeBaseProvider,
  Text,
  Box,
  Pressable,
  Input,
  VStack,
  HStack,
  Button,
  Modal,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components"
import { Ionicons } from "@expo/vector-icons"
import * as LocalAuthentication from "expo-local-authentication"
import AppBar from "../components/home/AppBar"

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.mode.backgroundColor};
`

export default function TabOneScreen() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)

  const StyledContainer = styled(Box)`
    background-color: ${(props) => props.theme.mode.backgroundColor};
  `

  const StyledText = styled(Text)`
    color: ${(props) => props.theme.themes[theme].secondaryColor};
  `
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
  }

  const selectTheme = (selectedTheme: string) => {
    setTheme(selectedTheme)
  }

  return (
    <NativeBaseProvider>
      <Container>
        <TouchableOpacity onPress={toggleMode}>
          <StyledText>Toggle Mode</StyledText>
        </TouchableOpacity>

        {Object.keys(themes).map((themeKey) => (
          <TouchableOpacity
            key={themeKey}
            onPress={() => selectTheme(themeKey)}
          >
            <StyledText>{themeKey}</StyledText>
          </TouchableOpacity>
        ))}
      </Container>
    </NativeBaseProvider>
  )
}
