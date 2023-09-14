import { useState, useEffect, ChangeEvent, useContext } from "react"
import { AuthStore } from "../../config/store"
import { KeyboardAvoidingView, TouchableOpacity, StatusBar } from "react-native"
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
  ScrollView,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeContext } from "../../constants/ThemeContext"
import { ThemeProps } from "../../types/styleTypes"
import BackBtn from "../BackBtn"
import {
  UtilitiesProps,
  ServiceData,
  IconName,
  Services,
} from "../../types/servicesType"

const Container = styled(ScrollView)`
  flex: 1;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.primaryColor};
`
const Title = styled(Text)`
  color: #fff;
  top: 10px;
  right: 25%;
  font-size: 20px;
  font-weight: 600;
  margin: auto;
`

export default function Recharge({ service }: { service: Services }) {
  const { mode, theme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <Container theme={{ theme: themes[theme] }}>
      <Stack.Screen options={{ title: "Login" }} />
      <HStack h={20} alignItems={"center"}>
        <BackBtn />
        <Title>{service.title}</Title>
      </HStack>
    </Container>
  )
}
