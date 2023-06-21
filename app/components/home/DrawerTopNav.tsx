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
  VStack,
  HStack,
  Button,
  Modal,
  Avatar,
} from "native-base"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"

interface ThemeProps {
  mode: {
    backgroundColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
  }
}

const Container = styled(HStack)<{ theme: ThemeProps }>`
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  padding: 0 10px;
  background-color: #fff;
`
const IdBox = styled(VStack)<{ theme: ThemeProps }>`
  align-items: center;
  padding: 0 10px;
  background-color: #754;
`

export default function DrawerTopNav(props: any) {
  const { handlecloseDrawer } = props
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const avater =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        <TouchableOpacity>
          <Avatar
            ml={1}
            size={10}
            source={{
              uri: avater,
            }}
          >
            AJ
          </Avatar>
        </TouchableOpacity>
        <IdBox>
          <Text ml={0}>ID: 222222</Text>
          <Text>engrusmanbelloauytyu</Text>
        </IdBox>
      </Container>
    </NativeBaseProvider>
  )
}
