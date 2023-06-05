import { StyleSheet } from "react-native"
import { AuthStore } from "../../config/store"
import {
  NativeBaseProvider,
  Text,
  Box,
  Heading,
  Pressable,
  Input,
  VStack,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
const Container = styled(SafeAreaView)`
  flex: 1;
  background: #228b22;
`
const Circle = styled(Box)`
  height: 45px;
  width: 45px;
  top: 10px;
  left: 15px;
  justify-content: center;
  align-items: center;
  background: #FFF
  border: 1px solid #FFF;
  border-radius: 50px;
`
const Title = styled(Text)`
  color: #fff;
  position: absolute;
  top: 100px;
  left: 15px;
  width: 45%;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
`
const Main = styled(Box)`
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 25%;
  border-radius: 30px;
  padding: 10px;
`
const LoginStack = styled(VStack)`
  bottom: 35%;
  width: 90%;
`
const LeftIcon = styled(Pressable)`
  left: 10px;
`
const Password = styled(Pressable)`
  right: 10px;
`
const LoginInput = styled(Input)`
  width: 75%;
  left: 5px;
  font-size: 12px;
  color: gray;
`
const ForgetPassword = styled(Text)`
  bottom: 33%;
  left: 25%;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  background: transparent;
`

const ForgetPwd = styled(Link)`
  color: #0e32b4;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
`

export default function LoginScreen() {
  const router = useRouter()
  const [show, setShow] = useState(false)

  const handleLogin = () => {
    AuthStore.update((s) => {
      s.isLoggedIn = true
      router.replace("/(main)")
    })
  }

  const handleRegister = () => {
    AuthStore.update((s) => {
      s.isLoggedIn = false
    })
    router.push("/register")
  }

  return (
    <NativeBaseProvider>
      <Container>
        <Box>
          {/* <Stack.Screen options={{ title: "Login" }} /> */}
          <Circle>
            <Ionicons name="chevron-back-sharp" size={34} color="#228b22" />
          </Circle>
          <Title>Welcome Back</Title>
          <Main>
            <LoginStack space="2">
              <LoginInput
                variant="rounded"
                InputLeftElement={
                  <LeftIcon>
                    <Ionicons name="person" size={25} color="#228b22" />
                  </LeftIcon>
                }
                placeholder="Email or Phone"
              />
              <LoginInput
                type={show ? "text" : "password"}
                variant="rounded"
                InputLeftElement={
                  <LeftIcon>
                    <Ionicons name="lock-closed" size={25} color="#228b22" />
                  </LeftIcon>
                }
                InputRightElement={
                  <Password onPress={() => setShow(!show)}>
                    <Ionicons
                      name={show ? "eye" : "eye-off"}
                      size={25}
                      color="#228b22"
                    />
                  </Password>
                }
                placeholder="password"
              />
            </LoginStack>
            <ForgetPassword>
              <ForgetPwd href="/(auth)forgotpwd">Forgot password?</ForgetPwd>
            </ForgetPassword>
          </Main>
          {/* <Text onPress={handleLogin}>Login</Text>
          <Text onPress={handleRegister}>Create Account</Text> */}
        </Box>
      </Container>
    </NativeBaseProvider>
  )
}
