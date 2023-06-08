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
import OtpPage from "../components/Otp"
import Submit from "../components/Submit"

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
  width: 45%;
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
  bottom: 25%;
  width: 90%;
`
const LeftIcon = styled(Pressable)`
  left: 10px;
`
const LoginInput = styled(Input)`
  width: 75%;
  left: 5px;
  font-size: 12px;
  color: gray;
`
const SignUp = styled(Text)`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`
const CreateBtn = styled(Button)`
  top: 5%;
  width: 100%;
  background: #228b22;
  border-radius: 50px;
`
const TermStack = styled(HStack)`
  width: 100%;
  top: 5%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`
const Terms = styled(Text)`
  color: #000;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 1px;
`
const TermsLink = styled(Link)`
  color: #0e32b4;
  font-size: 10px;
  font-weight: 600;
`
const ModalBox = styled(Modal)`
  background: red;
  width: 100%;
  height: 80%;
  top: 25%;
  border-radius: 15px;
`
const ModalContent = styled(VStack)`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  bottom: 0%;
`
const ModalStack = styled(VStack)`
  justify-content: center;
  align-items: center;
  top: 80px;
`
const ModalTex = styled(Text)`
  top: 25px;
  left: 25px;
  margin-bottom: 20%;
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
`
const ModalInfo = styled(Text)`
  color: #000;
  top: 40%;
  left: 5px;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 1px;
`

const ModalCancel = styled(Text)`
  top: 50%;
  color: #0e32b4;
`
const ContinueStack = styled(VStack)`
  width: 100%;
  height: 40px;
  bottom: 13%;
  justify-content: center;
  align-items: center;
`
const Hrule = styled(Box)`
  top: 10%;
  border: 1px solid #228b22;
  width: 100%;
  height: 0.5px;
`
const Continue = styled(Text)`
  bottom: 20%;
  width: 40%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: #fff;
  color: #0e32b4;
`
const SocialLogins = styled(HStack)`
  top: 5%;
  width: 25%;
  justify-content: space-around;
`
const SignInBox = styled(Text)`
  bottom: 5%;
  color: #000;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  background: transparent;
`

const SignIn = styled(Link)`
  color: #0e32b4;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
`

export default function LoginScreen() {
  const router = useRouter()
  const [check, setCheck] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleRegister = () => {
    // AuthStore.update((s) => {
    //   s.isLoggedIn = true
    // })
    // router.replace("/(main)")
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
          <Title>Create Account</Title>
          <Main>
            <LoginStack space="2">
              <LoginInput
                variant="rounded"
                InputLeftElement={
                  <LeftIcon>
                    <Ionicons
                      name="mail-open-outline"
                      size={25}
                      color="#228b22"
                    />
                  </LeftIcon>
                }
                placeholder="Email or Phone"
              />
              <CreateBtn onPress={() => setIsModalVisible(true)}>
                <SignUp>Create account</SignUp>
              </CreateBtn>
              <TermStack>
                <Ionicons
                  onPress={() => setCheck(!check)}
                  name={check ? "square-outline" : "checkbox"}
                  size={25}
                  color="#228b22"
                />
                <Terms>
                  I agreed with the&nbsp;
                  <TermsLink href="/register">
                    Terms of use & privacy policy
                  </TermsLink>
                </Terms>
              </TermStack>
            </LoginStack>
            <ModalBox
              isOpen={isModalVisible}
              onClose={() => setIsModalVisible(false)}
            >
              <ModalContent>
                <ModalTex>Enter OTP</ModalTex>
                <ModalStack>
                  <OtpPage />
                  <Box w={"75%"}>
                    <Submit handlePress={handleRegister} submit="Submit" />
                  </Box>
                  <ModalInfo>
                    Didn't recieve the code?&nbsp;
                    <TermsLink href="/register">Resend</TermsLink>
                  </ModalInfo>
                  <ModalCancel onPress={() => setIsModalVisible(false)}>
                    Back to Sign up
                  </ModalCancel>
                </ModalStack>
              </ModalContent>
            </ModalBox>
            <ContinueStack>
              <Hrule />
              <Continue>Or continue with</Continue>
              <SocialLogins>
                <Ionicons name="logo-google" size={34} color="#DB4437" />
                <Ionicons name="ios-logo-apple" size={34} color="#555555" />
              </SocialLogins>
            </ContinueStack>
            <SignInBox>
              Already have an account?&nbsp;
              <SignIn href="/login">Sign in</SignIn>
            </SignInBox>
          </Main>
        </Box>
      </Container>
    </NativeBaseProvider>
  )
}
