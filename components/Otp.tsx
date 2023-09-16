import styled from "styled-components/native"
import { useState, useRef, ChangeEvent } from "react"
import { AuthStore } from "../config/store"
import { Text, Box, Input, ScrollView } from "native-base"
import { Stack, useRouter, Link } from "expo-router"

const OtpContainer = styled(Box)`
  flex-direction: row;
`
const OtpMsg = styled(Text)`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 500;
`
const OtpInput = styled(Input)`
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
`
interface PinProps {
  inputNums: number
  otpMessage?: string
}

const OtpPage = (props: PinProps) => {
  const { inputNums, otpMessage } = props
  const [otp, setOtp] = useState<string[]>(Array(inputNums).fill(""))
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
      <OtpMsg>{otpMessage}</OtpMsg>
      <OtpContainer>
        {otp.map((value, index) => (
          <Box w={10} height={1} m={1} key={index}>
            <OtpInput
              value={value}
              maxLength={1}
              keyboardType="numeric"
              focusOutlineColor={"#228b22"}
              onChangeText={(text: string) => handleOtpChange(index, text)}
              onKeyPress={({ nativeEvent }: { nativeEvent: { key: string } }) =>
                handleOtpKeyPress(index, nativeEvent.key)
              }
              ref={(ref: any) => (inputRefs.current[index] = ref)}
            />
          </Box>
        ))}
      </OtpContainer>
    </>
  )
}

export default OtpPage
