import { useState, useContext, useEffect, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  FlatList,
  Animated,
  Image,
} from "react-native"
import { ThemeContext } from "../../constants/ThemeContext"
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
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as LocalAuthentication from "expo-local-authentication"
import AppBar from "../home/AppBar"
import { modeTheme, themes } from "../../constants/Themes"
import { slides } from "../../constants/data"
import PromoSlider from "./PromoSlider"
import FlatSlider from "./FlatSlider"

interface ThemeProps {
  mode: {
    backgroundColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
  }
}

const Container = styled(VStack)<{ theme: ThemeProps }>`
  width: 100%;
  position: absolute;
`

export default function ServicesTop() {
  const { mode, theme } = useContext(ThemeContext)
  const images = [
    { id: 1, imageUrl: "https://example.com/image1.jpg" },
    { id: 2, imageUrl: "https://example.com/image2.jpg" },
    { id: 3, imageUrl: "https://example.com/image3.jpg" },
    // Add more images here
  ]
  return <Container theme={{ theme: themes[theme] }}></Container>
}
