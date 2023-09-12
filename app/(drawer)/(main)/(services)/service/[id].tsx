import { useState, useContext, useRef, useEffect } from "react"
import { TouchableOpacity, StatusBar, DrawerLayoutAndroid } from "react-native"
import { NativeBaseProvider, VStack, ScrollView, Box, Text } from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { modeTheme, themes } from "../../../../../constants/Themes"
import { ThemeContext } from "../../../../../constants/ThemeContext"
import Recharge from "../../../../components/services/Recharge"

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
export default function RechargeScreen() {
  const { mode, theme } = useContext(ThemeContext)
  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        <StatusBar
          barStyle={mode === "light" ? "light-content" : "light-content"}
          backgroundColor={
            mode === "light" ? themes[theme].secondaryColor : "#000"
          }
        />
        <Recharge />
      </Container>
    </NativeBaseProvider>
  )
}
