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
  }
}

type ServiceData = {
  id: Number
  title: string
  icon: string
}

const Container = styled(Stack)<{ theme: ThemeProps }>`
  flex: 1;
  left: 10px;
`
const Title = styled(Text)<{ theme: ThemeProps }>`
  font-size: 20px;
  font-weight: 400;
`
const ServicesContainer = styled(HStack)<{ theme: ThemeProps }>`
  justify-content: space-between;
  background-color: red;
`

export default function Utilities() {
  const [selectedId, setSelectedId] = useState<Number>()

  const renderItem = ({ item }: { item: ServiceData }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff"
    const color = item.id === selectedId ? "white" : "black"

    return (
      <ServicesContainer>
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          style={{ backgroundColor }}
        >
          <Text style={{ color }}>{item.title}</Text>
        </TouchableOpacity>
      </ServicesContainer>
    )
  }
  return (
    <Container>
      <Title>Services</Title>
      <FlatList
        data={servicesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={3}
      />
    </Container>
  )
}
