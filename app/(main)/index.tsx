import { useState, useContext, useEffect, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
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
// import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import * as LocalAuthentication from "expo-local-authentication"
import AppBar from "../components/home/AppBar"
import { modeTheme, themes } from "../../constants/Themes"

interface ThemeProps {
  mode: {
    backgroundColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
  }
}

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`

const AppText = styled.Text<{ theme: ThemeProps }>`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.secondaryColor};
`

const ToggleButton = styled.TouchableOpacity``

const ColorButton = styled.TouchableOpacity`
  margin-top: 10px;
`

export default function MainScreen() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  console.log("initial mode: ", mode)
  console.log("initial theme: ", theme)

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
  }

  const selectTheme = (selectedTheme: string) => {
    setTheme(selectedTheme)
  }

  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        <AppText theme={{ theme: themes[theme] }}>App Content</AppText>
        <ToggleButton onPress={toggleMode}>
          <AppText theme={{ theme: themes[theme] }}>Toggle Mode</AppText>
        </ToggleButton>

        <View>
          {Object.keys(themes).map((themeKey) => (
            <ColorButton key={themeKey} onPress={() => selectTheme(themeKey)}>
              <AppText theme={{ theme: themes[themeKey] }}>{themeKey}</AppText>
            </ColorButton>
          ))}
        </View>
      </Container>
    </NativeBaseProvider>
  )
}

// <NativeBaseProvider>
//   <Container>
//     <TouchableOpacity onPress={toggleMode}>
//       <StyledText>Toggle Mode</StyledText>
//     </TouchableOpacity>

//     {Object.keys(themes).map((themeKey) => (
//       <TouchableOpacity
//         key={themeKey}
//         onPress={() => selectTheme(themeKey)}
//       >
//         <StyledText>{themeKey}</StyledText>
//       </TouchableOpacity>
//     ))}
//   </Container>
// </NativeBaseProvider>
{
  /* <SafeAreaView style={Styles.container}>
        <Text style={Styles.text}>App Content</Text>
        <TouchableOpacity onPress={toggleMode}>
          <Text style={Styles.text}>Toggle Mode</Text>
        </TouchableOpacity>

        <View>
          {Object.keys(themes).map((themeKey) => (
            <TouchableOpacity
              key={themeKey}
              onPress={() => selectTheme(themeKey)}
            >
              <Text style={Styles.text}>{themeKey}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView> */
}

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: modeTheme[mode].backgroundColor,
//   },
//   text: {
//     color: themes[theme].secondaryColor,
//   },
// })

// const StyledText = styled(Text)`
//   color: ${(props: any) => props.theme.themes[theme].secondaryColor};
// `
