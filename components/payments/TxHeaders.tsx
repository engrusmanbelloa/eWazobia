import { useState, useContext, useEffect, ChangeEvent } from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Text, VStack, HStack } from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { ThemeContext } from "../../constants/ThemeContext"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeProps } from "../../types/styleTypes"
import BackBtn from "../BackBtn"

const Container = styled(VStack)<{ theme: ThemeProps }>`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const InnerCircle = styled(LinearGradient)`
  position: absolute;
  width: 550px;
  height: 550px;
  bottom: -5%;
  border-radius: 600px;
  justify-content: center;
  align-items: center;
`
const Title = styled(Text)`
  position: absolute;
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  line-height: 30px;
  right: 34.5%;
  top: 20%;
`
const SubHeading = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  top: 45%;
`
const AmountStack = styled(HStack)`
  align-items: center;
  justify-content: center;
  top: 10%;
`
const Amount = styled(Text)`
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -1.5px;
`
const PaymentStack = styled(VStack)`
  position: absolute;
  top: 30%;
  height: 30%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default function TxHeaders(props: any) {
  const { title, backBtn } = props
  const { mode, theme } = useContext(ThemeContext)
  const firstColor = themes[theme].primaryColor
  const secondColor = themes[theme].activeColor
  const innerFirstColor = modeTheme[mode].backgroundColor
  return (
    <Container theme={{ theme: themes[theme] }}>
      <InnerCircle
        colors={[firstColor, secondColor]}
        start={{ x: 0.2, y: 0.4 }}
        end={{ x: 1, y: 1 }}
      />
      <PaymentStack>
        <HStack width={"100%"} h={"100%"}>
          {backBtn && <BackBtn />}
          <Title>{title}</Title>
        </HStack>
        <SubHeading>Wallet balance</SubHeading>
        <AmountStack>
          <MaterialCommunityIcons name="currency-ngn" size={20} color="#fff" />
          <Amount>25,000.00</Amount>
        </AmountStack>
      </PaymentStack>
    </Container>
  )
}
