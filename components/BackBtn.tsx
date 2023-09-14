import { useState, useEffect, ChangeEvent, useContext } from "react"
import { KeyboardAvoidingView, TouchableOpacity, StatusBar } from "react-native"
import { Stack, useRouter, Link } from "expo-router"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { modeTheme, themes } from "../constants/Themes"
import { ThemeContext } from "../constants/ThemeContext"
import { ThemeProps } from "../types/styleTypes"

const Circle = styled(TouchableOpacity)`
  height: 40px;
  width: 40px;
  top: 10px;
  left: 15px;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 50px;
`
export default function BackBtn() {
  const { mode, theme } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <Circle onPress={() => router.back()}>
      <Ionicons
        name="ios-arrow-back-outline"
        size={30}
        color={modeTheme[mode].backgroundColor}
      />
    </Circle>
  )
}
