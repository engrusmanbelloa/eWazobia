import { useState, useContext, useEffect, ChangeEvent } from "react"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  Animated,
} from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
  Pressable,
  Input,
  Stack,
  VStack,
  HStack,
  Button,
  Modal,
  Avatar,
  ZStack,
} from "native-base"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { TabView, SceneMap } from "react-native-tab-view"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"

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
const TxStack = styled(HStack)<{ theme: ThemeProps }>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
  top: -20px;
  background-color: transparent;
`
const TxBox = styled(VStack)<{ theme: ThemeProps }>`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`
const TxText = styled(Text)<{ theme: ThemeProps }>`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.drawerColor};
  font-size: 14px;
  font-weight: 400;
`

export default function HomeQuickTx() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const handlePay = () => {}
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
            onPress={handlePay}
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
