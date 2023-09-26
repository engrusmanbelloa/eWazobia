import { useState, useContext, useEffect, ChangeEvent } from "react"
import { Ionicons } from "@expo/vector-icons"
import { StatusBar, ScrollView, TouchableOpacity } from "react-native"
import { useRouter, useSegments } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  KeyboardAvoidingView,
  NativeBaseProvider,
  View,
  Button,
  Text,
  Heading,
  Box,
  VStack,
  Pressable,
  HStack,
  Stack,
} from "native-base"
import styled from "styled-components/native"
import { ThemeContext } from "../../../constants/ThemeContext"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeProps } from ".../../../types/styleTypes"
import { AuthStore } from "../../../config/store"
import InfoScreen from "./info"
import BvnScreen from "./verifyId"
import IdUploadScreen from "./idupload"
import Submit from "../../../components/Submit"
import ModalComponent from "../../../components/ModalComponent"
// Define the styled components
const SafeArea = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: #000;
`
const Container = styled(VStack)`
  width: 100%;
  height: 100%;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.primaryColor};
`
const Head = styled(Box)`
  width: 100%;
  margin-bottom: 10px;
  height: 10%;
  top: 2%;
  flex-direction: row;
  align-items: center;
`
const Circle = styled(TouchableOpacity)`
  height: 45px;
  width: 45px;
  top: 0px;
  left: 15px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.textColor};
  border-radius: 50px;
`
const Main = styled(ScrollView)`
  width: 100%;
  height: 100%;
  top: 1%;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.textColor};
  border-radius: 15px;
  padding: 15px;
`
// Define the KYCProcess component
export default function KYCProcess() {
  const { mode, theme } = useContext(ThemeContext)
  const [step, setStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [bvn, setBVN] = useState("")
  const [idImage, setIDImage] = useState(null)

  const router = useRouter()
  const showBtn = false

  const handleNextStep = () => {
    setStep((prevStep) => (prevStep < 2 ? prevStep + 1 : prevStep))
  }

  const handlePreviousStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep))
  }

  const handleInfoSubmit = () => {
    // Handle basic info form submission
    console.log("Basic Info:", basicInfo)
    handleNextStep()
  }

  const handleBVNSubmit = () => {
    // Handle BVN form submission
    setShowSuccess(true)
    handleNextStep()
  }

  const handleIDUpload = () => {
    // Handle ID upload form submission
    console.log("ID Image:", idImage)
    handleNextStep()
  }

  const login = () => {
    setShowSuccess(false)
    AuthStore.update((s) => {
      s.hasAccount = true
      s.hasDoneKYC = true
    })
    router.push("/login")
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <InfoScreen handleInfoSubmit={handleInfoSubmit} />
      case 2:
        return <BvnScreen handleBVNSubmit={handleBVNSubmit} />
      default:
        return null
    }
  }

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={mode === "light" ? "light-content" : "light-content"}
      />
      <SafeArea>
        <Container theme={{ theme: themes[theme] }}>
          <Head>
            <Circle
              theme={{ theme: themes[theme] }}
              onPress={handlePreviousStep}
            >
              <Ionicons
                name="chevron-back-sharp"
                size={34}
                color={themes[theme].primaryColor}
              />
            </Circle>
            <Heading color={themes[theme].textColor} ml={"34%"}>
              KYC
            </Heading>
          </Head>
          <Main theme={{ theme: themes[theme] }}>{renderStepContent()}</Main>
          <ModalComponent
            handlePress={login}
            showBtn={showBtn}
            isModalVisible={showSuccess}
            setIsModalVisible={setShowSuccess}
            title="Set Biometric"
            info="Touch the fingerprint sensor"
            infoLink=""
            submit="Login"
          >
            <Ionicons
              name="ios-finger-print"
              size={60}
              color={themes[theme].primaryColor}
            />
          </ModalComponent>
        </Container>
      </SafeArea>
    </NativeBaseProvider>
  )
}
