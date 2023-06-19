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
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"
import { AuthStore } from "../../../config/store"

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
  height: 15%;
  width: 100%;
  position: absolute;
  padding: 0 5px;
`
const AppText = styled.Text<{ theme: ThemeProps }>`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.secondaryColor};
`

const ToggleButton = styled.TouchableOpacity``

const ColorButton = styled.TouchableOpacity`
  margin-top: 10px;
`

export default function AppBar() {
  const { mode, theme } = useContext(ThemeContext)
  const avater =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  return (
    <NativeBaseProvider>
      <Container>
        <Avatar
          size="md"
          source={{
            uri: avater,
          }}
        >
          AJ
        </Avatar>
        <Input
          placeholder="Search"
          variant="filled"
          width="60%"
          borderRadius="20"
          py="1"
          px="2"
          ml={2}
          mr={2}
          InputRightElement={<Ionicons name="ios-search" size={25} />}
        />
        <Ionicons name="cart-outline" color={"#fff"} size={35} />
        <Ionicons name="notifications-outline" color={"#fff"} size={35} />
      </Container>
    </NativeBaseProvider>
  )
}
