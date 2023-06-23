import { useState, useContext, useEffect, ChangeEvent } from "react"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
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
  shadowOffset: { width: 20, height: 20 },
  shadowOpacity: 0.5,
  shadowRadius: 15,
  elevation: 10,
}

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  bottom: 20%;
  height: 70%;
`
const WalletsStack = styled(ZStack)<{ theme: ThemeProps }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  top: 10%;
`
const OuterBox = styled(Box)<{ theme: ThemeProps }>`
  border-right-width: 2px;
  border-right-color: #fff;
  border-radius: 150px;
  width: 300px;
  height: 300px;
`
const Overlay = styled(View)<{ theme: ThemeProps }>`
  flex: 1;
  border-radius: 150px;
`

export default function Wallets() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  return (
    <Container>
      <WalletsStack theme={{ mode: modeTheme[mode] }}>
        <OuterBox style={boxShadowStyle}></OuterBox>

        {/* <Box bg="indigo.500" size="40" rounded="lg" shadow={8} />
        <Box bg="indigo.300" size="30" rounded="lg" shadow={8} /> */}
      </WalletsStack>
    </Container>
  )
}
