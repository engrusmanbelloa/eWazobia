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
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"
import WalletsTabs from "../home/WalletTabs"

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

const boxShadowStyle = {
  shadowColor: "#fff",
  shadowOpacity: 0.5,
  elevation: 10,
}

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  bottom: 115px;
`
const WalletsStack = styled(ZStack)<{ theme: ThemeProps }>`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const OuterBox = styled(Box)<{ theme: ThemeProps }>`
  border-right-width: 5px;
  border-left-width: 0.5px;
  border-top-width: 1px;
  border-right-color: #fff;
  border-left-color: #fff;
  border-top-color: #fff;
  border-radius: 150px;
  width: 300px;
  height: 300px;
`

export default function Wallets() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  return (
    <Container>
      <WalletsStack theme={{ mode: modeTheme[mode] }}>
        <OuterBox></OuterBox>
      </WalletsStack>
    </Container>
  )
}
