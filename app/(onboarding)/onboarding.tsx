import { Link, Stack, useRouter } from "expo-router"
import styled from "styled-components/native"
import { useState, useContext, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
  Pressable,
  HStack,
  VStack,
} from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AuthStore } from "../../config/store"
import Button from "../../components/Button"
import { ThemeContext } from "../../constants/ThemeContext"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeProps } from "../../types/styleTypes"

const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.primaryColor};
`
const Title = styled(Text)`
  color: #fff;
  position: absolute;
  top: 60px;
  left: 30px;
  font-size: 30px;
  font-weight: 700;
  line-height: 80px;
`
const SubHeading = styled(Text)`
  color: #fff;
  margin-top: 130px;
  left: 30px;
  font-size: 25px;
  font-weight: 300;
  line-height: 40px;
  width: 90%;
`
const List = styled(Box)`
  color: #fff;
  margin-top: 10px;
  left: 30px;
`
const Li = styled(Text)`
  color: #fff;
  width: 80%;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  margin-top: 20px;
  margin-left: 10px;
`
const Circle = styled(Box)`
  height: 45px;
  width: 45px;
  left: 25px;
  border: 1px solid #fff;
  border-radius: 50px;
`
const Getstarted = styled(Box)`
  bottom: 5%;
  width: 100%;
`
const SignInBox = styled(Text)`
  bottom: 0%;
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  background: transparent;
`

const SignIn = styled(Link)`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.linkColor};
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
`

export default function Onboarding() {
  const router = useRouter()
  const { mode, theme } = useContext(ThemeContext)
  const list = [
    "Explore hundreds of shops around you for all your needs and make seamless payments with eNaira.",
    "Get recomendations based on your search and preferences.",
    "Are you a business owner? Go digital with your business by creating your own shop on eWazobia.",
    "Get recomendations based on your search and location.",
  ]

  const handlePress = () => {
    router.push("/register")
  }

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={mode === "light" ? "light-content" : "light-content"}
      />
      <Container theme={{ theme: themes[theme] }}>
        <Stack.Screen options={{ title: "Welcome" }} />
        <Title>eWazobia app:</Title>
        <SubHeading>
          Unlock the power of digital payments, where payments meet convenience.
        </SubHeading>
        <List>
          {list.map((item) => (
            <HStack key={item.toString()}>
              <MaterialCommunityIcons
                name="slash-forward-box"
                size={24}
                color="#FFF"
                style={{ marginTop: 20 }}
              />
              <Li>{item}</Li>
            </HStack>
          ))}
        </List>
        <HStack bottom={"0%"} flex={1} alignItems={"center"}>
          <VStack>
            <Circle></Circle>
            <Circle></Circle>
          </VStack>
          <VStack alignItems={"center"} w={"80%"}>
            <Getstarted>
              <Button title="Get started" handlePress={handlePress} />
            </Getstarted>
            <SignInBox>
              Already a member?&nbsp;
              <SignIn theme={{ theme: themes[theme] }} href="/login">
                Sign in
              </SignIn>
            </SignInBox>
          </VStack>
        </HStack>
      </Container>
    </NativeBaseProvider>
  )
}
