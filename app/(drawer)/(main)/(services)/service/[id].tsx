import { useState, useContext, useRef, useEffect, ComponentType } from "react"
import { TouchableOpacity, StatusBar, DrawerLayoutAndroid } from "react-native"
import { NativeBaseProvider, VStack, ScrollView, Box, Text } from "native-base"
import { Stack, useRouter, Link, useLocalSearchParams } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { modeTheme, themes } from "../../../../../constants/Themes"
import { ThemeContext } from "../../../../../constants/ThemeContext"
import servicesData from "../../../../../constants/services"
import Recharge from "../../../../components/services/Recharge"
import ComingSoon from "../../../../components/services/ComingSoon"
import Data from "../../../../components/services/Data"
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
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
`
export default function RechargeScreen() {
  const { mode, theme } = useContext(ThemeContext)
  const { id } = useLocalSearchParams<{ id: string }>()
  const numId = id && parseInt(id, 10)
  const service = servicesData.find((s) => s.id === numId)

  // Define a component mapping object
  const componentMapping: { [key: string]: JSX.Element } = {
    "Airtime Recharge": <Recharge />,
    "Data Purchase": <Data />,
  }

  const ComponentToRender = service ? componentMapping[service.title] : null
  return (
    <NativeBaseProvider>
      <Container theme={{ mode: modeTheme[mode] }}>
        <StatusBar
          barStyle={mode === "light" ? "light-content" : "light-content"}
          backgroundColor={
            mode === "light" ? themes[theme].secondaryColor : "#000"
          }
        />
        {ComponentToRender ? ComponentToRender : <ComingSoon />}
      </Container>
    </NativeBaseProvider>
  )
}
