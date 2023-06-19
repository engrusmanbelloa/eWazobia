import { useState, useContext, useEffect, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
} from "react-native"
import { ThemeContext } from "../../constants/ThemeContext"
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
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { modeTheme, themes } from "../../constants/Themes"
import AppBar from "../components/home/AppBar"

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
const TopContainer = styled(VStack)<{ theme: ThemeProps }>`
  background-color: ${({ theme, mode }: { theme: ThemeProps; mode: string }) =>
    mode === "light" ? theme.theme.primaryColor : "#000"};
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
  height: 60%;
  width: 100%;
  top: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 99;
`
const AppText = styled.Text<{ theme: ThemeProps }>`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.secondaryColor};
`
const ToggleButton = styled.TouchableOpacity``
const ColorButton = styled.TouchableOpacity`
  margin-top: 10px;
`

export default function MainScreen() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)

  const toggleMode = async () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
    await AsyncStorage.setItem("mode", newMode)
  }

  const selectTheme = async (selectedTheme: string) => {
    setTheme(selectedTheme)
    await AsyncStorage.setItem("theme", selectedTheme)
  }

  useEffect(() => {
    const loadPersistedData = async () => {
      try {
        const persistedMode = await AsyncStorage.getItem("mode")
        const persistedTheme = await AsyncStorage.getItem("theme")

        if (persistedMode) {
          setMode(persistedMode)
        }
        if (persistedTheme) {
          setTheme(persistedTheme)
        }
      } catch (error) {
        console.log("Error loading persisted data:", error)
      }
    }

    loadPersistedData()
  }, [])

  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        <StatusBar
          barStyle={mode === "light" ? "light-content" : "light-content"}
          backgroundColor={
            mode === "light" ? themes[theme].secondaryColor : "#000"
          }
        />
        <TopContainer theme={{ theme: themes[theme] }}>
          <AppBar />
        </TopContainer>
        {/* <AppText theme={{ theme: themes[theme] }}>App Content</AppText> */}
        <ToggleButton onPress={toggleMode}>
          <AppText theme={{ theme: themes[theme] }}>Toggle Mode</AppText>
        </ToggleButton>
        <View>
          {Object.keys(themes).map((themeKey) => (
            <ColorButton key={themeKey} onPress={() => selectTheme(themeKey)}>
              <AppText theme={{ theme: themes[themeKey] }}>{themeKey}</AppText>
            </ColorButton>
          ))}
        </View>
      </Container>
    </NativeBaseProvider>
  )
}
