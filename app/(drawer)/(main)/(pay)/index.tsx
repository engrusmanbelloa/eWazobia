import { useState, useContext, useEffect, useCallback } from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StatusBar, SafeAreaView, RefreshControl } from "react-native"
import { NativeBaseProvider, Text, VStack, HStack } from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { ThemeContext } from "../../../../constants/ThemeContext"
import { modeTheme, themes } from "../../../../constants/Themes"
import { ThemeProps } from "../../../../types/styleTypes"
import TxHeaders from "../../../../components/payments/TxHeaders"
import QRScan from "../../../../components/payments/QRScan"

const Container = styled(VStack)<{ theme: ThemeProps }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
`
const MiddleContainer = styled(VStack)<{ theme: ThemeProps }>`
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  top: 5%;
`

export default function PayScreen() {
  const { mode, theme } = useContext(ThemeContext)
  const firstColor = themes[theme].primaryColor
  const secondColor = themes[theme].activeColor
  const innerFirstColor = modeTheme[mode].backgroundColor
  const [refreshing, setRefreshing] = useState(false)
  const backBtn = false

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={mode === "light" ? "light-content" : "light-content"}
      />
      <Container
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        theme={{ theme: themes[theme] }}
      >
        <TxHeaders title="Payment" backBtn={backBtn} />
        <MiddleContainer theme={{ mode: modeTheme[mode] }}>
          <QRScan />
        </MiddleContainer>
      </Container>
    </NativeBaseProvider>
  )
}
