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
  ScrollView,
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
  border-radius: 500px;
  margin: auto;
`
const InnerCircle = styled(LinearGradient)`
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: 67%;
  border-radius: 500px;
  justify-content: center;
  align-items: center;
`
const Title = styled(Text)`
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  line-height: 25px;
  top: 5%;
`
const SubHeading = styled(Text)`
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  top: 30%;
`
const Amount = styled(Text)`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
  margin-right: 5px;
  top: 35%;
`
const PaymentStack = styled(VStack)`
  position: absolute;
  top: 7%;
  height: 30%;
`
export default function PayScreen() {
  const { mode, theme } = useContext(ThemeContext)
  const firstColor = themes[theme].primaryColor
  const secondColor = themes[theme].activeColor
  const innerFirstColor = modeTheme[mode].backgroundColor

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={mode === "light" ? "light-content" : "light-content"}
      />
      <Container theme={{ mode: modeTheme[mode] }}>
        <InnerCircle
          colors={[firstColor, secondColor]}
          start={{ x: 0.6, y: 0.8 }}
          end={{ x: 1, y: 0.3 }}
        />
        <PaymentStack>
          <Title>Payment</Title>
          <SubHeading>Making payment</SubHeading>
          <Amount>25,000.00</Amount>
        </PaymentStack>
      </Container>
    </NativeBaseProvider>
  )
}
