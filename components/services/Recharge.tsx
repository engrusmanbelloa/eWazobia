import { useState, useEffect, ChangeEvent, useContext } from "react"
import { KeyboardAvoidingView, TouchableOpacity, FlatList } from "react-native"
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
  Select,
  ScrollView,
  CheckIcon,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeContext } from "../../constants/ThemeContext"
import { ThemeProps } from "../../types/styleTypes"
import BackBtn from "../BackBtn"
import {
  UtilitiesProps,
  ServiceData,
  IconName,
  Services,
} from "../../types/servicesType"

const Container = styled(ScrollView)`
  flex: 1;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.primaryColor};
`
const Title = styled(Text)`
  color: #fff;
  top: 10px;
  right: 25%;
  font-size: 20px;
  font-weight: 600;
  margin: auto;
`
const Provider = styled(Select)`
  color: #fff;
  margin: auto;
  font-size: 16px;
`

export default function Recharge({ service }: { service: Services }) {
  const { mode, theme } = useContext(ThemeContext)
  const router = useRouter()

  // State variables for the selected provider and amount
  const [selectedProvider, setSelectedProvider] = useState("")
  const [selectedAmount, setSelectedAmount] = useState(0)
  const [mobileNumber, setMobileNumber] = useState(0)

  // Handler for when the provider is changed
  const handleProviderChange = (value: string) => {
    setSelectedProvider(value)
  }

  // Handler for when the amount is changed
  const handleAmountChange = (value: number) => {
    setSelectedAmount(value)
  }

  // Handler for when the custom amount input is changed
  const handleCustomAmountChange = (value: number) => {
    setSelectedAmount(value)
  }

  // Handler for when the phone number input is changed input is changed
  const handlePhoneNumberChange = (value: number) => {
    setSelectedAmount(value)
  }

  return (
    <Container theme={{ theme: themes[theme] }}>
      <Stack.Screen options={{ title: "Login" }} />
      <HStack h={20} alignItems={"center"}>
        <BackBtn />
        <Title>{service.title}</Title>
      </HStack>
      {/* Provider dropdown */}
      <VStack w={"90%"} m={"auto"} mt={2}>
        <Provider
          accessibilityLabel="Select Provider"
          placeholder="Select Provider"
          placeholderTextColor="#ffffff"
          borderRadius="10px"
          selectedValue={selectedProvider}
          _selectedItem={{
            bg: themes[theme].activeColor,
            endIcon: <CheckIcon size="5" />,
          }}
          onValueChange={handleProviderChange}
        >
          {service.optionGroups[0].options.map((option) => (
            <Provider.Item
              key={option.value}
              label={option.label}
              value={option.value.toString()}
            />
          ))}
        </Provider>
        <VStack flex={1}>
          <Text mt={5} fontSize={20} w={"full"} color={"#fff"}>
            Select amount
          </Text>
          <HStack
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            {service.optionGroups[1].options.map((option) => (
              <Box
                w={"25%"}
                mt={10}
                mr={5}
                bg={"#fff"}
                justifyContent={"center"}
                alignItems={"center"}
                h={50}
                key={option.value}
              >
                <TouchableOpacity>
                  <Text fontSize={16}>{option.label}</Text>
                </TouchableOpacity>
              </Box>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </Container>
  )
}
