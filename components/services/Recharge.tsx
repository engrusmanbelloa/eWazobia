import { useState, useEffect, useCallback, useContext } from "react"
import {
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  RefreshControl,
} from "react-native"
import {
  Text,
  Box,
  Input,
  VStack,
  HStack,
  Select,
  CheckIcon,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"
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
  top: 3%;
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
  height: 50px;
  border-radius: 15px;
`
const ValueMap = styled(HStack)`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
const PhoneMap = styled(HStack)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const PhoneStack = styled(Box)`
  width: 25%;
  justify-content: center;
  align-items: center;
  height: 60px;
`
export default function Recharge({ service }: { service: Services }) {
  const { mode, theme } = useContext(ThemeContext)
  const router = useRouter()

  // State variables for the selected provider and amount
  const [selectedProvider, setSelectedProvider] = useState("")
  const [selectedAmount, setSelectedAmount] = useState<number>()
  const [mobileNumber, setMobileNumber] = useState<number>()
  const [selectedId, setSelectedId] = useState<string>()
  const [inputValue, setInputValue] = useState<string>()
  const [phoneNuber, setPhoneNuber] = useState<string>()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [pinRecharge, setPinRecharge] = useState(false)
  const [pinConfirm, setPinConfirm] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const showBtn = true

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
  // Handler to open the modal dialog for approving transaction
  const handleRecharge = () => {
    setIsModalVisible(true)
    setPinRecharge(false)
  }

  // Handler for successfull recharge
  const handleSuccess = () => {
    setShowSuccess(false)
    router.push("../../(services)")
  }

  // Handler for pin verification
  const handlePin = () => {
    if (!pinRecharge && !pinConfirm) {
      setPinRecharge(true)
      setPinConfirm(true)
    } else if (pinConfirm) {
      setIsModalVisible(false)
      setShowSuccess(true)
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      theme={{ theme: themes[theme] }}
    >
      <HStack h={20} alignItems={"center"}>
        <BackBtn />
        <Title>{service.title}</Title>
      </HStack>
      <VStack w={"90%"} m={"auto"} h={"100%"} top={"30%"} mb={"20%"}>
        {/* Recent recharges map */}
        <Text fontSize={18} color={"#fff"} fontWeight={500}>
          Recent
        </Text>
        <PhoneMap>
          {service.optionGroups &&
            service.optionGroups[2].options &&
            service.optionGroups[2].options.map(
              (option) =>
                option.recentPhones &&
                option.recentPhones.map((phone) => (
                  <PhoneStack key={phone.PhoneNumber}>
                    <TouchableOpacity
                      style={{}}
                      onPress={() => {
                        // handleAmountChange(option.value)
                        // setInputValue(option.value.toString())
                      }}
                    >
                      <Text color={"#fff"} fontSize={12}>
                        {phone.PhoneNumber}
                      </Text>
                    </TouchableOpacity>
                  </PhoneStack>
                ))
            )}
        </PhoneMap>
        {/* Provider dropdown */}
        <Provider
          accessibilityLabel="Select Provider"
          placeholder="Select Provider"
          placeholderTextColor="#fff"
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
          <Text mt={2} fontSize={20} w={"full"} color={"#fff"}>
            Select amount
          </Text>
          <ValueMap>
            {service.optionGroups[1].options.map((option) => (
              <ValuStack key={option.value}>
                <TouchableOpacity
                  style={{}}
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
            placeholderTextColor={"#fff"}
            inputMode="numeric"
            color={"#fff"}
            fontSize={18}
            value={inputValue}
            isRequired
            focusOutlineColor={"#fff"}
            maxLength={4}
            mb={3}
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
            placeholderTextColor={"#fff"}
            inputMode="numeric"
            color={"#fff"}
            fontSize={18}
            value={phoneNuber}
            isRequired
            focusOutlineColor={"#fff"}
            maxLength={11}
            mb={5}
            onChangeText={(value) => {
              setPhoneNuber(value)
              console.log(phoneNuber)
            }}
          />
        )}
        <Box top={"1%"}>
          <Button title="Recharge" handlePress={handleRecharge} />
        </Box>
      </VStack>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ModalComponent
          handlePress={handlePin}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
          title="Verify"
          infoLink=""
          showOtpPage={pinRecharge}
          otpMessage="Enter your 4 digit taransaction pin"
          inputNums={4}
          submit={pinRecharge ? "Confirm" : "Use PIN"}
          modalX="Cancel"
        >
          {!pinRecharge && (
            <Ionicons
              name="ios-finger-print"
              size={60}
              color={themes[theme].primaryColor}
            />
          )}
        </ModalComponent>
      </KeyboardAvoidingView>
      <ModalComponent
        handlePress={handleSuccess}
        showBtn={showBtn}
        isModalVisible={showSuccess}
        setIsModalVisible={setShowSuccess}
        title="Success"
        intro="Recharge sucessfull"
        infoLink=""
        submit="Exit"
      />
    </Container>
  )
}
