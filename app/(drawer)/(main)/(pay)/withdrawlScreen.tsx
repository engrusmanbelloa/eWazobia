import { useState, useContext, useEffect, ChangeEvent } from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { StatusBar, SafeAreaView } from "react-native"
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
import Withdrawal from "../../../../components/payments/Withdrawal"

const Container = styled(VStack)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
`
const MiddleContainer = styled(VStack)`
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  top: 5%;
`

export default function WithdrawlScreen() {
  const { mode, theme } = useContext(ThemeContext)
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={mode === "light" ? "light-content" : "light-content"}
      />
      <Container theme={{ theme: themes[theme] }}>
        <Withdrawal />
      </Container>
    </NativeBaseProvider>
  )
}
