import { useState, useContext, useEffect, ChangeEvent } from "react"
import { Animated, TouchableOpacity } from "react-native"
import { Text, Box, VStack, HStack } from "native-base"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { Stack, useRouter, Link } from "expo-router"
import { TabView, SceneMap } from "react-native-tab-view"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeContext } from "../../constants/ThemeContext"

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
const TxStack = styled(HStack)`
  align-items: center;
  justify-content: center;

  top: -20px;
  background-color: transparent;
`
const TxBox = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`
const TxText = styled(Text)`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.drawerColor};
  font-size: 14px;
  font-weight: 400;
`

export default function HomeQuickTx() {
  const { mode, theme } = useContext(ThemeContext)
  const router = useRouter()
  const handlePay = () => {}
  const handleScanPay = () => {
    router.push("/(services)")
    console.log("Scan Pay has been clicked")
  }
  return (
    <TxStack>
      <Box justifyContent={"center"} alignItems={"center"} mr={"50px"}>
        <TxBox theme={{ mode: modeTheme[mode] }}>
          <Ionicons
            onPress={handlePay}
            name="download-outline"
            size={30}
            color={themes[theme].primaryColor}
          />
        </TxBox>
        <TxText theme={{ theme: themes[theme] }}>Deposit</TxText>
      </Box>
      <Box justifyContent={"center"} alignItems={"center"} mr={"50px"}>
        <TxBox theme={{ mode: modeTheme[mode] }}>
          <Ionicons
            onPress={handleScanPay}
            name="md-scan"
            size={30}
            color={themes[theme].primaryColor}
          />
        </TxBox>
        <TxText theme={{ theme: themes[theme] }}>Scan pay</TxText>
      </Box>
      <Box justifyContent={"center"} alignItems={"center"}>
        <TxBox theme={{ mode: modeTheme[mode] }}>
          <Ionicons
            onPress={handlePay}
            name="send-outline"
            size={30}
            color={themes[theme].primaryColor}
          />
        </TxBox>
        <TxText theme={{ theme: themes[theme] }}>Send</TxText>
      </Box>
    </TxStack>
  )
}
