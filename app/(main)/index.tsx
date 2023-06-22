import { useState, useContext, useRef, useEffect, ChangeEvent } from "react"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  Button,
  DrawerLayoutAndroid,
} from "react-native"
import { NativeBaseProvider, VStack, ScrollView } from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthStore } from "../../config/store"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeContext } from "../../constants/ThemeContext"
import AppBar from "../components/home/AppBar"
import DrawerTopNav from "../components/home/DrawerTopNav"
import DrawerQickNav from "../components/home/DrawerQuickNav"

interface ThemeProps {
  mode: {
    backgroundColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
    drawerColor: string
  }
}

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`
const TopContainer = styled(VStack)<{ theme: ThemeProps }>`
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
  height: 60%;
  width: 100%;
  top: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 99;
`
const DrawerViewContainer = styled(VStack)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.drawerColor};
`
const DrawerNavContainer = styled(ScrollView)`
  flex: 1;
`

export default function MainScreen() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const drawer = useRef<DrawerLayoutAndroid>(null)

  const handleDrawer = () => {
    drawer.current?.openDrawer()
  }

  const handlecloseDrawer = () => {
    drawer.current?.closeDrawer()
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

  const drawerView = () => (
    <DrawerViewContainer theme={{ theme: themes[theme] }}>
      <DrawerNavContainer>
        <DrawerTopNav handlecloseDrawer={handlecloseDrawer} />
        <DrawerQickNav />
      </DrawerNavContainer>
    </DrawerViewContainer>
  )

  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={drawerView}
      >
        <Container theme={{ mode: modeTheme[mode] }}>
          <StatusBar
            barStyle={mode === "light" ? "light-content" : "light-content"}
            backgroundColor={
              mode === "light" ? themes[theme].secondaryColor : "#000"
            }
          />
          <TopContainer theme={{ theme: themes[theme] }}>
            <AppBar handleDrawer={handleDrawer} />
          </TopContainer>
        </Container>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  )
}
