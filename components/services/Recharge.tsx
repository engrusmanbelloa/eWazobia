import { useState, useEffect, ChangeEvent, useContext } from "react"
import { GestureResponderEvent, TouchableOpacity, FlatList } from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
  Pressable,
  Input,
  VStack,
  HStack,
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
import Button from "../Button"
import { Services } from "../../types/servicesType"
import ModalComponent from "../ModalComponent"

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
const AmountStack = styled(VStack)`
  width: 100%;
  margin: 5px 0;
`
const ValuStack = styled(Box)`
  width: 32%;
  margin-top: 5%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: 60px;
`
const ValueMap = styled(HStack)`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export default function Recharge({ service }: { service: Services }) {
  const { mode, theme } = useContext(ThemeContext)
  const router = useRouter()

  // State variables for the selected provider and amount
  const [selectedProvider, setSelectedProvider] = useState("")
  const [selectedAmount, setSelectedAmount] = useState<number>()
  const [mobileNumber, setMobileNumber] = useState<number>()
  const [inputValue, setInputValue] = useState<string>()
  const [phoneNuber, setPhoneNuber] = useState<string>()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [pinRecharge, setPinRecharge] = useState(false)

  // Handler for when the provider is changed
  const handleProviderChange = (value: string) => {
    setSelectedProvider(value)
  }

  // Handler for when the amount is changed
  const handleAmountChange = (value: string | number) => {
    const numberValue = typeof value === "string" ? parseInt(value, 10) : value
    setSelectedAmount(numberValue)
  }

  // Handler for when the phone number input is changed input is changed
  const handlePhoneNumberChange = (value: number) => {
    setMobileNumber(value)
  }

  // Handler for when the  input is changed input is changed
  const handleRecharge = () => {
    setIsModalVisible(true)
    console.log(isModalVisible)
  }

  // Handler for pin recharge
  const handlePin = () => {
    setPinRecharge(true)
  }

  // const handlePin = () => {
  //   router.push("/index")
  //   setIsModalVisible(false)
  // }

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
        {/* amount selection */}
        <AmountStack>
          <Text mt={5} fontSize={20} w={"full"} color={"#fff"}>
            Select amount
          </Text>
          <ValueMap>
            {service.optionGroups[1].options.map((option) => (
              <ValuStack key={option.value}>
                <TouchableOpacity
                  onPress={() => {
                    handleAmountChange(option.value)
                    setInputValue(option.value.toString())
                  }}
                >
                  <Text fontSize={18}>{option.label}</Text>
                </TouchableOpacity>
              </ValuStack>
            ))}
          </ValueMap>
        </AmountStack>
        {/* Custom amount input */}
        {service.optionGroups[2].hasCustomValue && (
          <Input
            variant="underlined"
            placeholder="Amount"
            inputMode="numeric"
            color={"#fff"}
            fontSize={18}
            value={inputValue}
            isRequired
            focusOutlineColor={"#fff"}
            maxLength={4}
            mb={5}
            onChangeText={(value) => {
              setInputValue(value)
              console.log(inputValue)
            }}
          />
        )}
        {/* Phone Number input */}
        {service.optionGroups[1].hasCustomValue && (
          <Input
            variant="underlined"
            placeholder="Phone number"
            inputMode="numeric"
            color={"#fff"}
            fontSize={18}
            value={phoneNuber}
            isRequired
            focusOutlineColor={"#fff"}
            maxLength={4}
            mb={10}
            onChangeText={(value) => {
              setPhoneNuber(value)
              console.log(phoneNuber)
            }}
          />
        )}
        <Button title="Recharge" handlePress={handleRecharge} />
      </VStack>
      <ModalComponent
        handlePress={handlePin}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        title="Recharge"
        infoLink=""
        submit="Use PIN"
        modalX="Cancel"
      >
        <Ionicons name="ios-finger-print" size={60} color="#00AA00" />
      </ModalComponent>
    </Container>
  )
}
