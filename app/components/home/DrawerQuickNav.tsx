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
import { Ionicons, FontAwesome } from "@expo/vector-icons"
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
  align-items: center;
  justify-content: space-around;
  width: 100%;
  bottom: 70%;
`
const NavText = styled(Text)<{ theme: ThemeProps }>`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin-right: 5px;
`

export default function DrawerQickNav(props: any) {
  const { mode, theme } = useContext(ThemeContext)
  const avater =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        <HStack
          alignItems={"center"}
          w={"100%"}
          justifyContent={"space-around"}
        >
          <VStack alignItems={"center"}>
            <FontAwesome name="send-o" size={30} color={"#fff"} />
            <NavText>Send</NavText>
          </VStack>
          <VStack alignItems={"center"}>
            <Ionicons
              name="shield-checkmark-outline"
              size={30}
              color={"#fff"}
            />
            <NavText>Security</NavText>
          </VStack>
          <VStack alignItems={"center"}>
            <Ionicons name="notifications-outline" size={30} color={"#fff"} />
            <NavText>Notifications</NavText>
          </VStack>
        </HStack>
        <Text>Appearance</Text>
      </Container>
    </NativeBaseProvider>
  )
}
