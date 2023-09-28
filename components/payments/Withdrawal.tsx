import { TouchableOpacity, Platform } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import React, { useState, useEffect, useContext } from "react"
import * as ImagePicker from "expo-image-picker"
import { Ionicons } from "@expo/vector-icons"
import {
  Button,
  Text,
  Stack,
  HStack,
  Box,
  VStack,
  Input,
  Select,
  Icon,
  Modal,
  Avatar,
} from "native-base"
import styled from "styled-components/native"
import { useLocalSearchParams } from "expo-router"
import axios from "axios"
import { ThemeContext } from "../../constants/ThemeContext"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeProps } from "../../types/styleTypes"
import { User } from "../../types/userType"

const Container = styled(VStack)`
  width: 100%;
  height: 100%;
  alignitems: center;
  justifycontent: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
`

export default function Withdrawal() {
  const { mode, theme } = useContext(ThemeContext)
  const [amount, setAmount] = useState("")
  const [bank, setBank] = useState("")

  const handleNextStep = () => {
    // Navigate to the confirmation screen
    // Pass the amount and bank as parameters
  }
  return (
    <VStack space={4} alignItems="center">
      <HStack space={3}>
        <Icon as={Ionicons} name="account-circle" size={6} />
        <Text>Frequent Transactions</Text>
      </HStack>
      <Text
        onPress={() => {
          /* Navigate to beneficiaries screen */
        }}
      >
        Beneficiaries
      </Text>
      <VStack space={2} alignItems="stretch">
        <Text>Withdrawal Methods:</Text>
        <Input placeholder="eNaira Input" />
        <Input
          placeholder="Bank Account Input"
          value={bank}
          onChangeText={setBank}
        />
        <Select
          selectedValue={bank}
          onValueChange={setBank}
          placeholder="Select Bank"
        >
          {/* Add Select.Item components for each bank */}
        </Select>
        <Input
          placeholder="Amount to be Withdrawn"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <Button onPress={handleNextStep}>Next Step</Button>
      </VStack>
    </VStack>
  )
}
