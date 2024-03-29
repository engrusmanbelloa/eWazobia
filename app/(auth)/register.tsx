import { useState, ChangeEvent } from "react"
import { KeyboardAvoidingView } from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
  Pressable,
  Input,
  VStack,
  HStack,
  Button,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import ModalComponent from "../../components/ModalComponent"

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
  font-size: 18px;
  font-weight: 500;
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
  font-size: 14px;
  font-weight: 600;
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
  const showOtpPage = true

  const handleRegister = () => {
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
            <ModalComponent
              handlePress={handleRegister}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
              title="Enter OTP"
              info="Didn't recieve the code?"
              infoLinkText="Resend"
              infoLink="/register"
              submit="Submit"
              showOtpPage={showOtpPage}
              otpMessage="Enter your 6 digits sent to example@gmail.com"
              inputNums={6}
              modalX="Back to Sign up"
            />
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
