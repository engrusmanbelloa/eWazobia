import { useState, useEffect, ChangeEvent, useContext } from "react"
import { AuthStore } from "../../config/store"
import { KeyboardAvoidingView, TouchableOpacity, StatusBar } from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
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
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeContext } from "../../constants/ThemeContext"
import { ThemeProps } from "../../types/styleTypes"

const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.primaryColor};
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
const LeftIcon = styled(Pressable)`
  left: 10px;
`
const Password = styled(TouchableOpacity)`
  right: 10px;
`
const LoginInput = styled(Input)`
  width: 75%;
  left: 5px;
  font-size: 12px;
  color: gray;
`
const ForgetPassword = styled(Text)`
  bottom: 0%;
  left: 50%;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  background: transparent;
`
const ForgetPwd = styled(Link)`
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.linkColor};
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
`
const Login = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`
const LoginBtn = styled(TouchableOpacity)`
  top: 5%;
  width: 100%;
  height: 40px;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.primaryColor};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`
const ModalBox = styled(Modal)`
  background: red;
  width: 100%;
  height: 45%;
  top: 60%;
  border-radius: 15px;
`
const ModalLogin = styled(VStack)`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  bottom: 0%;
`
const ModalStack = styled(VStack)`
  justify-content: center;
  align-items: center;
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
  top: 25px;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 600;
  line-height: 25px;
`
const ModalCancel = styled(Text)`
  top: 5px;
  color: #0e32b4;
`
const ContinueStack = styled(VStack)`
  width: 100%;
  height: 50px;
  bottom: 15%;
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
  bottom: 15%;
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
const SignUpBox = styled(Text)`
  bottom: 10%;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 1px;
  background: transparent;
`
const SignUp = styled(Link)`
  color: #0e32b4;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
`

export default function LoginScreen() {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false)
  const { isLoggedIn, hasDoneKYC } = AuthStore.useState((s) => s)
  const { mode, theme } = useContext(ThemeContext)
  const login = () => {
    // Login logic when password is entered
    if (password !== "") {
      if (hasDoneKYC) {
        router.replace("/(drawer)")
      } else {
        AuthStore.update((s) => {
          s.isLoggedIn = true
          router.push("/kyc")
        })
      }
    } else {
      showModal()
      // Login with biometric logic when password is empty
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const loginMethod = password.trim() !== "" ? "Login" : "Login with biometric"

  const handleRegister = () => {
    AuthStore.update((s) => {
      s.isLoggedIn = false
    })
    router.push("/register")
  }

  const handleIcon = () => {}

  return (
    <NativeBaseProvider>
      <Container theme={{ theme: themes[theme] }}>
        <Stack.Screen options={{ title: "Login" }} />
        <StatusBar
          barStyle={mode === "light" ? "light-content" : "light-content"}
          backgroundColor={
            mode === "light" ? themes[theme].primaryColor : "#000"
          }
        />
        <Box>
          <Circle onPress={() => router.back()}>
            <Ionicons
              name="chevron-back-sharp"
              size={34}
              color={themes[theme].primaryColor}
            />
          </Circle>
          <Title>Welcome Back</Title>
          <Main>
            <LoginStack space="2">
              <LoginInput
                type="email"
                isRequired
                variant="rounded"
                InputLeftElement={
                  <LeftIcon>
                    <Ionicons
                      name="mail-open-outline"
                      size={25}
                      color={themes[theme].primaryColor}
                    />
                  </LeftIcon>
                }
                placeholder="Email or Phone"
              />
              <LoginInput
                type={show ? "text" : "password"}
                value={password}
                onChangeText={(text: string) => setPassword(text)}
                variant="rounded"
                InputLeftElement={
                  <LeftIcon>
                    <Ionicons
                      name="lock-closed"
                      size={25}
                      color={themes[theme].primaryColor}
                    />
                  </LeftIcon>
                }
                InputRightElement={
                  <Password onPress={() => setShow(!show)}>
                    <Ionicons
                      name={show ? "eye" : "eye-off"}
                      size={25}
                      color={themes[theme].primaryColor}
                    />
                  </Password>
                }
                placeholder="password"
              />
              <ForgetPassword>
                <ForgetPwd theme={{ theme: themes[theme] }} href="/forgortpwd">
                  Forgot password?
                </ForgetPwd>
              </ForgetPassword>
              <LoginBtn theme={{ theme: themes[theme] }} onPress={login}>
                <Login>{loginMethod}</Login>
              </LoginBtn>
            </LoginStack>
            <ModalBox
              isOpen={isModalVisible}
              onClose={() => setIsModalVisible(false)}
            >
              <ModalLogin>
                <ModalTex>Login</ModalTex>
                <ModalStack>
                  <Ionicons
                    name="ios-finger-print"
                    size={50}
                    color={themes[theme].primaryColor}
                  />
                  <ModalInfo>Touch the fingerprint sensor</ModalInfo>
                  <ModalCancel onPress={() => setIsModalVisible(false)}>
                    Cancel
                  </ModalCancel>
                </ModalStack>
              </ModalLogin>
            </ModalBox>
            <ContinueStack>
              <Hrule />
              <Continue>Or continue with</Continue>
              <SocialLogins>
                <Ionicons name="logo-google" size={34} color="#DB4437" />
                <Ionicons name="ios-logo-apple" size={34} color="#555555" />
              </SocialLogins>
            </ContinueStack>
            <SignUpBox onPress={handleRegister}>
              Don't have an account?&nbsp;
              <SignUp href="/register">Sign up</SignUp>
            </SignUpBox>
          </Main>
        </Box>
      </Container>
    </NativeBaseProvider>
  )
}
