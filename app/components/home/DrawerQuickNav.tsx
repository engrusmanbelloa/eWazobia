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
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
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
  bottom: 0%;
  padding: 5px 10px;
`
const SendContainer = styled(HStack)`
  align-items: center;
  width: 100%;
  top: 10%;
`
const NavText = styled(Text)<{ theme: ThemeProps }>`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`
const AppearanceStack = styled(HStack)`
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 60px;
`
const Appearance = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`
const ThemesStack = styled(HStack)`
  justify-content: space-between;
  align-items: center;
  width: 88%;
  margin-top: 30px;
`
const ThemesTxt = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin-right: 20px;
`
const ThemesBtn = styled.TouchableOpacity`
  margin-top: 10px;
`
const FundStack = styled(HStack)`
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 25px;
`

export default function DrawerQickNav(props: any) {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const avater =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  const toggleMode = async () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
    await AsyncStorage.setItem("mode", newMode)
  }

  const selectTheme = async (selectedTheme: string) => {
    setTheme(selectedTheme)
    await AsyncStorage.setItem("theme", selectedTheme)
  }

  useEffect(() => {
    const loadPersistedData = async () => {
      try {
        const persistedMode = await AsyncStorage.getItem("mode")
        const persistedTheme = await AsyncStorage.getItem("theme")

        if (persistedMode) {
          setMode(persistedMode)
        }
        if (persistedTheme) {
          setTheme(persistedTheme)
        }
      } catch (error) {
        console.log("Error loading persisted data:", error)
      }
    }
    loadPersistedData()
  }, [])

  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        <SendContainer>
          <VStack mr={55} alignItems={"center"}>
            <MaterialCommunityIcons
              name="currency-ngn"
              size={30}
              color={"#fff"}
            />
            <NavText>Rewards</NavText>
          </VStack>
          <VStack mr={55}>
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
        </SendContainer>
        <AppearanceStack>
          <Appearance>Appearance</Appearance>
          <Box left={20}>
            <Ionicons
              onPress={toggleMode}
              name="ios-toggle"
              color={modeTheme[mode].backgroundColor}
              size={40}
            />
          </Box>
        </AppearanceStack>
        <ThemesStack>
          <ThemesTxt>Themes</ThemesTxt>
          <HStack w={"80%"} justifyContent={"space-between"}>
            {Object.keys(themes).map((themeKey) => (
              <ThemesBtn key={themeKey} onPress={() => selectTheme(themeKey)}>
                <Ionicons name="ios-toggle" color={themeKey} size={40} />
              </ThemesBtn>
            ))}
          </HStack>
        </ThemesStack>
        <FundStack>
          <Appearance>Become marchant</Appearance>
          <Box left={20}>
            <Ionicons name="arrow-forward-outline" color={"#fff"} size={20} />
          </Box>
        </FundStack>
        <FundStack>
          <Appearance>Referal</Appearance>
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
