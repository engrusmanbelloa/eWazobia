import { useState, useContext, useRef, useEffect } from "react"
import { TouchableOpacity, StatusBar, FlatList } from "react-native"
import {
  NativeBaseProvider,
  VStack,
  ScrollView,
  Box,
  Text,
  Stack,
  HStack,
} from "native-base"
import { useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"
import servicesData from "../../../constants/services"

interface ThemeProps {
  mode: {
    backgroundColor: string
    textColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
    drawerColor: string
    activeColor: string
    textColor: string
  }
}

type ServiceData = {
  id: Number
  title: string
  icon: string
}

type IconName =
  | "key"
  | "ios-call-outline"
  | "ios-wifi-outline"
  | "cog-outline"
  | "ios-send-outline"
  | "ios-tv-outline"
  | "ios-airplane-outline"
  | "ios-book-outline"
  | "push"
  | "map"
  | "filter"

const Container = styled(Stack)<{ theme: ThemeProps }>`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-top: 15px;
`
const Title = styled(Text)<{ theme: ThemeProps }>`
  font-size: 20px;
  font-weight: 400;
  left: 10px;
  margin-bottom: 5px;
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.textColor};
`
const ServicesContainer = styled(HStack)<{ theme: ThemeProps }>`
  flex: 1;
  margin: 5px;
  background-color: transparent;
  justify-content: center;
  border: 1px solid;
  border-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
  border-radius: 5px;
  padding: 5px 0;
`

export default function Utilities() {
  const { mode, theme } = useContext(ThemeContext)
  const [selectedId, setSelectedId] = useState<Number>()
  const titleToIcon: Record<string, IconName> = {
    "Airtime Recharge": "ios-call-outline",
    "Data Purchase": "ios-wifi-outline",
    Utility: "cog-outline",
    "Pay Remita": "ios-send-outline",
    "TV Subscriptions": "ios-tv-outline",
    "Book Flights": "ios-airplane-outline",
    Transactions: "ios-book-outline",
    "My Flights": "ios-book-outline",
    "My Recharges": "ios-book-outline",
  }

  const renderItem = ({ item }: { item: ServiceData }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff"
    const color = themes[theme].textColor
    const iconName = titleToIcon[item.title]

    return (
      <ServicesContainer>
        <TouchableOpacity onPress={() => setSelectedId(item.id)}>
          <Box justifyContent={"center"} alignItems={"center"}>
            <Ionicons name={iconName} size={24} color={color} />
            <Text style={{ color }}>{item.title}</Text>
          </Box>
        </TouchableOpacity>
      </ServicesContainer>
    )
  }
  return (
    <Container theme={{ theme: themes[theme] }}>
      <Title theme={{ theme: themes[theme] }}>Services</Title>
      <FlatList
        data={servicesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={3}
      />
    </Container>
  )
}
