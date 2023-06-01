import { Link, Stack, useRouter } from "expo-router"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { NativeBaseProvider, Text, Box, Pressable, HStack } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Getstarted = styled(Pressable)`
  width: 40%;
  height: 40px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  background: transparent;
`
const SignUp = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`
const Button = (props: any) => {
  return (
    <Getstarted isHovered>
      <SignUp href="/register">Get started</SignUp>
    </Getstarted>
  )
}

export default Button
