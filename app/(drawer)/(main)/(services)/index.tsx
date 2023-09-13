import { useState, useContext, useEffect, useRef } from "react"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { TouchableOpacity, StatusBar } from "react-native"
import { NativeBaseProvider, Box, Stack } from "native-base"
import { useRouter, useSearchParams, Link } from "expo-router"
import { ActivityIndicator } from "react-native"
import { useQuery } from "@tanstack/react-query"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import AppBar from "../../../components/home/AppBar"
import { modeTheme, themes } from "../../../../constants/Themes"
import { ThemeContext } from "../../../../constants/ThemeContext"
import Wallets from "../../../components/home/Wallets"
import HomeQuickTx from "../../../components/home/HomeQuickTx"
import Utilities from "../../../components/services/Utilities"
import servicesData from "../../../../constants/services"

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
  height: 50%;
  width: 100%;
  top: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`
const MiddleContainer = styled(Box)<{ theme: ThemeProps }>`
  background-color: transparent;
`
const BottomContainer = styled(Stack)<{ theme: ThemeProps }>`
  top: -10px;
  height: 50%;
  width: 100%;
`
export default function ServicesScreen() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const navigation = useNavigation()
  const router = useRouter()

  const { isLoading, error, data } = useQuery({
    queryKey: ["servicesData"],
    queryFn: () => Promise.resolve(servicesData),
    // () =>
    //   fetch('https://api.github.com/repos/TanStack/query').then(
    //     (res) => res.json(),
    //   ),
  })

  if (isLoading) return <ActivityIndicator />

  if (error) return "An error has occurred: "

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
          {data && <Utilities servicesData={data} />}
        </BottomContainer>
      </Container>
    </NativeBaseProvider>
  )
}
