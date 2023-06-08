import { useState, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import { KeyboardAvoidingView } from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
  Heading,
  Pressable,
  Input,
  VStack,
  HStack,
  Button,
  Modal,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import Submit from "../components/Submit"
import ModalComponent from "../components/ModalComponent"

const Container = styled(SafeAreaView)`
  flex: 1;
  background: #228b22;
`
const Circle = styled(Pressable)`
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
  width: 50%;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
`
const Main = styled(KeyboardAvoidingView)`
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
  bottom: 22%;
  width: 90%;
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

export default function LoginScreen() {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const create = () => {
    if (password !== "") {
      AuthStore.update((s) => {
        setShowSuccess(true)
        setIsModalVisible(true)
        // router.replace("/(main)")
      })
      // Login logic when password is entered
    } else {
      // Login with biometric logic when password is empty
    }
  }

  const login = () => {
    setShowSuccess(false)
    router.push("/login")
  }

  const handleRegister = () => {
    setIsModalVisible(true)
  }
  // Function to handle opening the modal
  const openModal = () => {
    setIsModalVisible(true)
  }

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalVisible(false)
  }
  return (
    <NativeBaseProvider>
      <Container>
        <Box>
          {/* <Stack.Screen options={{ title: "Login" }} /> */}
          <Circle onPress={() => router.back()}>
            <Ionicons name="chevron-back-sharp" size={34} color="#228b22" />
          </Circle>
          <Title>Create Password</Title>
          <Main>
            <LoginStack space="2">
              <LoginInput
                type={show ? "text" : "password"}
                value={password}
                onChangeText={(text: string) => setPassword(text)}
                variant="rounded"
                InputRightElement={
                  <Password onPress={() => setShow(!show)}>
                    <Ionicons
                      name={show ? "eye" : "eye-off"}
                      size={25}
                      color="#228b22"
                    />
                  </Password>
                }
                placeholder="New password"
              />
              <LoginInput
                type={show ? "text" : "password"}
                value={confirmPassword}
                onChangeText={(text: string) => setConfirmPassword(text)}
                variant="rounded"
                InputRightElement={
                  <Password onPress={() => setShow(!show)}>
                    <Ionicons
                      name={show ? "eye" : "eye-off"}
                      size={25}
                      color="#228b22"
                    />
                  </Password>
                }
                placeholder="Confirm password"
              />
              <Submit handlePress={create} submit="Create" />
              <ModalComponent
                handlePress={login}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                title="Success"
                intro="You have successfully signed up!"
                infoLink=""
                submit="Login"
              />
            </LoginStack>
          </Main>
        </Box>
      </Container>
    </NativeBaseProvider>
  )
}
