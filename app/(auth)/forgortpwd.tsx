import { useState, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import { KeyboardAvoidingView } from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
  Pressable,
  Input,
  VStack,
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
  width: 85%;
`
const Password = styled(Pressable)`
  right: 10px;
`
const LoginInput = styled(Input)`
  left: 5px;
  font-size: 12px;
  color: gray;
`

export default function LoginScreen() {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showOtpPage = true

  const sendEmail = () => {
    // if (password !== "") {
    AuthStore.update((s) => {
      setShowSuccess(true)
      // router.replace("/(main)")
    })
    // Login logic when password is entered
    // } else {
    // Login with biometric logic when password is empty
    // }
  }

  const handleChangPswd = () => {
    setShowSuccess(false)
    setIsModalVisible(false)
    router.push("/createpswd")
  }
  return (
    <NativeBaseProvider>
      <Container>
        <Box>
          {/* <Stack.Screen options={{ title: "Login" }} /> */}
          <Circle onPress={() => router.back()}>
            <Ionicons name="chevron-back-sharp" size={34} color="#228b22" />
          </Circle>
          <Title>Change Password</Title>
          <Main>
            <LoginStack space="2">
              <LoginInput
                type="email"
                value={email}
                onChangeText={(text: string) => setEmail(text)}
                variant="underlined"
                placeholder="Email or Phone"
              />
              <ModalComponent
                handlePress={handleChangPswd}
                isModalVisible={showSuccess}
                setIsModalVisible={setShowSuccess}
                title="Enter OTP"
                info="Didn't recieve the code?"
                infoLinkText="Resend"
                infoLink="/register"
                submit="Submit"
                showOtpPage={showOtpPage}
                modalX="Cancel"
              />
            </LoginStack>
            <Box w={"90%"} bottom={"20%"}>
              <Submit handlePress={sendEmail} submit="Submit" />
            </Box>
          </Main>
        </Box>
      </Container>
    </NativeBaseProvider>
  )
}
