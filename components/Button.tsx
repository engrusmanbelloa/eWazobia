import { Link, Stack, useRouter } from "expo-router"
import { ReactNode } from "react"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { NativeBaseProvider, Text, Box, Pressable, HStack } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

interface ButtonProps {
  handlePress?: () => void
  children?: ReactNode
  title: string
}

const Getstarted = styled(TouchableOpacity)`
  width: 40%;
  height: 40px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  background: transparent;
`
const SignUp = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`
const Button = (props: ButtonProps) => {
  const { title, handlePress } = props
  return (
    <Getstarted onPress={handlePress}>
      {/* <SignUp href={`/${linkHref}`}>{title}</SignUp> */}
      <SignUp>{title}</SignUp>
    </Getstarted>
  )
}

export default Button
