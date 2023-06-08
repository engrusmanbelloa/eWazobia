import styled from "styled-components/native"
import { useState, useRef, ChangeEvent } from "react"
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
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      handleInputChange(index, value) // Shift focus to the next input
    }
  }

  const handleOtpKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && otp[index] === "") {
      const newOtp = [...otp]
      newOtp[index - 1] = ""
      setOtp(newOtp)
      handleInputChange(index - 1, "") // Shift focus to the previous input
    }
  }

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 0 && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus()
    } else if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus()
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
              onChangeText={(text: string) => handleOtpChange(index, text)}
              onKeyPress={({ nativeEvent }: { nativeEvent: { key: string } }) =>
                handleOtpKeyPress(index, nativeEvent.key)
              }
              ref={(ref: any) => (inputRefs.current[index] = ref)}
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
