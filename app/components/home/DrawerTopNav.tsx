import { useState, useContext, useEffect, ChangeEvent } from "react"
import { TouchableOpacity } from "react-native"
import { NativeBaseProvider, Text, Stack, HStack, Avatar } from "native-base"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
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

const Container = styled(HStack)<{ theme: ThemeProps }>`
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
`
const IdBox = styled(Stack)<{ theme: ThemeProps }>`
  padding: 0;
`
const IdText = styled(Text)<{ theme: ThemeProps }>`
  color: #fff;
  font-size: 12px;
  font-weight: 300;
  margin-left: 0px;
`
const UserTxt = styled(Text)<{ theme: ThemeProps }>`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
`
const VerifyBox = styled(HStack)`
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #cff4d2;
  width: 80px;
`
const Verify = styled(Text)<{ theme: ThemeProps }>`
  color: #228b22;
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
`

export default function DrawerTopNav(props: any) {
  const { handlecloseDrawer } = props
  const { mode, theme } = useContext(ThemeContext)
  const avater =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  return (
    <Container theme={{ mode: modeTheme[mode] }}>
      <Avatar
        ml={0}
        size={10}
        source={{
          uri: avater,
        }}
      />
      <IdBox>
        <IdText theme={{ mode: modeTheme[mode] }}>ID: 12345678</IdText>
        <UserTxt theme={{ mode: modeTheme[mode] }}>engrusmanbelloa</UserTxt>
      </IdBox>
      <VerifyBox>
        <Verify theme={{ mode: modeTheme[mode] }}>Verified</Verify>
        <Ionicons name="checkmark" size={20} color={"#228b22"} />
      </VerifyBox>
    </Container>
  )
}
