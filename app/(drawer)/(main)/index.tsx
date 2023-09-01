import { useState, useContext, useRef, useEffect } from "react"
import { TouchableOpacity, StatusBar, DrawerLayoutAndroid } from "react-native"
import { NativeBaseProvider, VStack, ScrollView, Box } from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"
import AppBar from "../../components/home/AppBar"
import Wallets from "../../components/home/Wallets"
import HomeQuickTx from "../../components/home/HomeQuickTx"
import NearByShops from "../../components/home/NearbyShops"

interface ThemeProps {
  mode: {
    backgroundColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
    drawerColor: string
    activeColor: string
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
  height: 50%;
  width: 100%;
  top: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`
const MiddleContainer = styled(Box)<{ theme: ThemeProps }>`
  background-color: transparent;
`
const BottomContainer = styled(Box)<{ theme: ThemeProps }>`
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
  background-color: transparent;
  padding-bottom: 50px;
`

export default function MainScreen() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const navigation = useNavigation()

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
          <AppBar
            handleDrawer={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Wallets />
        </TopContainer>
        <MiddleContainer>
          <HomeQuickTx />
        </MiddleContainer>
        <BottomContainer>
          <NearByShops />
        </BottomContainer>
      </Container>
    </NativeBaseProvider>
  )
}
