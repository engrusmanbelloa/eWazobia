import styled from "styled-components/native"
import { useState, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import {
  NativeBaseProvider,
  HStack,
  Text,
  Box,
  Input,
  Button,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"

const OtpContainer = styled(Box)`
  flex-direction: row;
`
const OtpInput = styled(Input)`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
`

const SubmitButton = styled(Button)`
  top: 10%;
  width: 75%;
  height: 40px;
  background: #228b22;
  border-radius: 50px;
`

const SubmitButtonText = styled(Text)`
  color: #fff;
  font-size: 20px;
`

const OtpPage = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
    }
  }

  const handleOtpKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && otp[index] === "") {
      const newOtp = [...otp]
      newOtp[index - 1] = ""
      setOtp(newOtp)
    }
  }

  return (
    <>
      <Text mt={1}>Enter the 6 digit sent to example@gmail.com</Text>
      <OtpContainer>
        {otp.map((value, index) => (
          <Box w={10} height={10} m={1} key={index}>
            <OtpInput
              value={value}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => handleOtpChange(index, text)}
              onKeyPress={({ nativeEvent }) =>
                handleOtpKeyPress(index, nativeEvent.key)
              }
            />
          </Box>
        ))}
      </OtpContainer>
      <SubmitButton>
        <SubmitButtonText>Submit</SubmitButtonText>
      </SubmitButton>
    </>
  )
}

export default OtpPage
