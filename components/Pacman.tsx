import { StyleSheet } from "react-native"
import { AuthStore } from "../config/store"
import { NativeBaseProvider, Text, Box } from "native-base"
import { Stack, useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"

const Container = styled(Box)`
    width: 300px
    height: 200px;
    border-top-width: 60px;
    border-top-color: red;
    border-left-color: red;
    border-left-width: 60px;
    border-right-color: transparent;
    border-right-width: 60px;
    border-bottom-color: red;
    border-bottom-width: 60px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 60px;
  }
`

export default function LoginScreen() {
  const router = useRouter()
  return (
    <NativeBaseProvider>
      <Container>
        <Stack.Screen options={{ title: "Login" }} />

        <Text>Login</Text>
        <Text>Create Account</Text>
      </Container>
    </NativeBaseProvider>
  )
}
