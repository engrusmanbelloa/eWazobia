import { useState, useContext, useEffect, ChangeEvent } from "react"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
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
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { ThemeContext } from "../../../../constants/ThemeContext"
import { modeTheme, themes } from "../../../../constants/Themes"
import { ThemeProps } from "../../../../types/styleTypes"

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`
const Circle = styled(LinearGradient)`
  position: absolute;
  border-radius: 550px;
  margin: auto;
`
const OuterCircle = styled(Circle)`
  width: 550px;
  height: 550px;
  bottom: 60%;
`
const InnerCircle = styled(Circle)`
  width: 450px;
  height: 450px;
  bottom: 68%;
`
const AppText = styled.Text<{ theme: ThemeProps }>`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.secondaryColor};
`

export default function PayScreen() {
  const { mode, theme } = useContext(ThemeContext)
  const firstColor = themes[theme].activeColor
  const secondColor = themes[theme].primaryColor
  const innerFirstColor = modeTheme[mode].backgroundColor
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={mode === "light" ? "light-content" : "light-content"}
      />
      <Container theme={{ mode: modeTheme[mode] }}>
        <OuterCircle
          colors={[firstColor, secondColor]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <InnerCircle
          colors={[innerFirstColor, innerFirstColor]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <AppText theme={{ theme: themes[theme] }}>Payment Content</AppText>
      </Container>
    </NativeBaseProvider>
  )
}
