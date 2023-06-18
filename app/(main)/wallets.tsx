import { useState, useContext, useEffect, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
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
// import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as LocalAuthentication from "expo-local-authentication"
import AppBar from "../components/home/AppBar"
import { modeTheme, themes } from "../../constants/Themes"

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
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`

const AppText = styled.Text<{ theme: ThemeProps }>`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.secondaryColor};
`

export default function WalletsScreen() {
  const { mode, theme } = useContext(ThemeContext)
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={mode === "light" ? "dark-content" : "light-content"}
      />
      <Container theme={{ mode: modeTheme[mode] }}>
        <AppText theme={{ theme: themes[theme] }}>Wallets Content</AppText>
      </Container>
    </NativeBaseProvider>
  )
}
