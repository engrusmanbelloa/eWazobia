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
} from "native-base"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"

interface ThemeProps {
  mode: {
    backgroundColor: string
    textColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
  }
}

const Container = styled(Stack)<{ theme: ThemeProps }>`
  width: 100%;
  bottom: 60%;
  padding: 5px 20px;
`
const SendContainer = styled(HStack)`
  align-items: center;
  width: 100%;
`
const NavText = styled(Text)<{ theme: ThemeProps }>`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`
const AppearanceStack = styled(HStack)`
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 40px;
`
const Appearance = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`
const ThemesStack = styled(HStack)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`
const ThemesTxt = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin-right: 20px;
`
const FundStack = styled(HStack)`
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 25px;
`

export default function DrawerQickNav(props: any) {
  const { mode, theme } = useContext(ThemeContext)
  const avater =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        <SendContainer>
          <VStack mr={55}>
            <FontAwesome name="send-o" size={30} color={"#fff"} />
            <NavText>Send</NavText>
          </VStack>
          <VStack mr={55} alignItems={"center"}>
            <Ionicons
              name="shield-checkmark-outline"
              size={30}
              color={"#fff"}
            />
            <NavText>Security</NavText>
          </VStack>
          <VStack alignItems={"center"}>
            <Ionicons name="notifications-outline" size={30} color={"#fff"} />
            <NavText>Rewards</NavText>
          </VStack>
        </SendContainer>
        <AppearanceStack>
          <Appearance>Appearance</Appearance>
          <Box left={20}>
            <Ionicons name="ios-toggle" color={"#fff"} size={40} />
          </Box>
        </AppearanceStack>
        <ThemesStack>
          <ThemesTxt>Themes</ThemesTxt>
          <HStack w={"80%"} justifyContent={"space-between"}>
            <Ionicons name="ios-toggle" color={"#00AA00"} size={40} />
            <Ionicons name="ios-toggle" color={"#0000FF"} size={40} />
            <Ionicons name="ios-toggle" color={"#FF0000"} size={40} />
            <Ionicons name="ios-toggle" color={"#FFA500"} size={40} />
          </HStack>
        </ThemesStack>
        <FundStack>
          <Appearance>Become marchant</Appearance>
          <Box left={20}>
            <Ionicons name="arrow-forward-outline" color={"#fff"} size={20} />
          </Box>
        </FundStack>
        <FundStack>
          <Appearance>Fund</Appearance>
          <Box left={20}>
            <Ionicons name="arrow-forward-outline" color={"#fff"} size={20} />
          </Box>
        </FundStack>
        <FundStack>
          <Appearance>Feedback</Appearance>
          <Box left={20}>
            <Ionicons name="arrow-forward-outline" color={"#fff"} size={20} />
          </Box>
        </FundStack>
        <FundStack>
          <Appearance>Help</Appearance>
          <Box left={20}>
            <Ionicons name="arrow-forward-outline" color={"#fff"} size={20} />
          </Box>
        </FundStack>
        <FundStack>
          <Appearance>Rate Us</Appearance>
          <Box left={20}>
            <Ionicons name="arrow-forward-outline" color={"#fff"} size={20} />
          </Box>
        </FundStack>
        <FundStack>
          <Appearance>Deactivate Account</Appearance>
          <Box left={20}>
            <Ionicons name="arrow-forward-outline" color={"#fff"} size={20} />
          </Box>
        </FundStack>
        <FundStack>
          <Appearance>Logout</Appearance>
          <Box left={20}>
            <Ionicons name="log-out-outline" color={"#fff"} size={20} />
          </Box>
        </FundStack>
      </Container>
    </NativeBaseProvider>
  )
}
