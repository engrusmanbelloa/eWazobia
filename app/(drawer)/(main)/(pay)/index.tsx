import { useState, useContext, useEffect, ChangeEvent } from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
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
import QRScan from "../../../../components/QRScan"

const Container = styled(VStack)<{ theme: ThemeProps }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`
const InnerCircle = styled(LinearGradient)`
  position: absolute;
  width: 700px;
  height: 700px;
  bottom: 65%;
  border-radius: 700px;
  justify-content: center;
  align-items: center;
`
const Title = styled(Text)`
  color: #fff;
  font-size: 35px;
  font-weight: 500;
  line-height: 35px;
  top: 0%;
`
const SubHeading = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  top: 17%;
`
const AmountStack = styled(HStack)`
  align-items: center;
  justify-content: center;
  top: 30%;
`
const Amount = styled(Text)`
  color: #fff;
  font-size: 35px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -2px;
`
const PaymentStack = styled(VStack)`
  position: absolute;
  top: 0%;
  height: 30%;
  justify-content: center;
  align-items: center;
`
const MiddleContainer = styled(SafeAreaView)<{ theme: ThemeProps }>`
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  top: 20%;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.textColor};
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
          start={{ x: 0.5, y: 0.8 }}
          end={{ x: 1, y: 0.5 }}
        />
        <PaymentStack>
          <Title>Payment</Title>
          <SubHeading>Wallet balance</SubHeading>
          <AmountStack>
            <MaterialCommunityIcons
              name="currency-ngn"
              size={20}
              color="#fff"
            />
            <Amount>25,000.00</Amount>
          </AmountStack>
        </PaymentStack>
        <MiddleContainer theme={{ mode: modeTheme[mode] }}>
          <QRScan />
        </MiddleContainer>
      </Container>
    </NativeBaseProvider>
  )
}
