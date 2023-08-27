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
  Stack,
  HStack,
  Button,
  Modal,
} from "native-base"
import { useRouter, Link } from "expo-router"
// import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as LocalAuthentication from "expo-local-authentication"
import AppBar from "../components/home/AppBar"
import { modeTheme, themes } from "../../constants/Themes"
import ServicesTop from "../components/services/ServicesTop"

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

const TopContainer = styled(Stack)<{ theme: ThemeProps }>`
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
  height: 30%;
  width: 100%;
  top: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

export default function MoreScreen() {
  const { mode, theme } = useContext(ThemeContext)
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={mode === "light" ? "dark-content" : "light-content"}
      />
      <Container theme={{ mode: modeTheme[mode] }}>
        <TopContainer theme={{ theme: themes[theme] }}>
          <ServicesTop />
        </TopContainer>
      </Container>
    </NativeBaseProvider>
  )
}
