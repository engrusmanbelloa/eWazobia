import React, { useState, useEffect } from "react"
import { Ionicons } from "@expo/vector-icons"
import { useRootNavigationState } from "expo-router"
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
} from "native-base"
import styled from "styled-components/native"
import { AuthStore } from "../../../config/store"
import InfoScreen from "./info"
import BvnScreen from "./bvn"
import IdUploadScreen from "./idupload"
import FaceverifyScreen from "./faceverify"
// Define the styled components
const Container = styled(SafeAreaView)`
  flex: 1;
  background: #228b22;
`
const Head = styled(Box)`
  width: 100%;
  margin-bottom: 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`
const Circle = styled(Pressable)`
  height: 45px;
  width: 45px;
  top: 0px;
  left: 15px;
  justify-content: center;
  align-items: center;
  background: #228b22
  border: 1px solid #FFF;
  border-radius: 50px;
`
const Main = styled(KeyboardAvoidingView)`
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 1%;
`
// Define the KYCProcess component
export default function KYCProcess() {
  const [step, setStep] = useState(1)
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [bvn, setBVN] = useState("")
  const [idImage, setIDImage] = useState(null)
  const [faceImage, setFaceImage] = useState(null)
  const router = useRouter()

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleInfoSubmit = () => {
    // Handle basic info form submission
    console.log("Basic Info:", basicInfo)
    handleNextStep()
  }

  const handleBVNSubmit = () => {
    // Handle BVN form submission
    console.log("BVN:", bvn)
    handleNextStep()
  }

  const handleIDUpload = () => {
    // Handle ID upload form submission
    console.log("ID Image:", idImage)
    handleNextStep()
  }

  const handleFaceVerify = () => {
    // Handle face verification form submission
    console.log("Face Image:", faceImage)
    handleNextStep()
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <InfoScreen handleInfoSubmit={handleInfoSubmit} />
      case 2:
        return <BvnScreen handleBVNSubmit={handleBVNSubmit} />
      case 3:
        return <IdUploadScreen handleIDUpload={handleIDUpload} />
      case 4:
        return <FaceverifyScreen handleFaceVerify={handleFaceVerify} />
      default:
        return null
    }
  }

  return (
    <NativeBaseProvider>
      <Container>
        <VStack>
          <Head>
            <Circle onPress={() => router.back()}>
              <Ionicons name="chevron-back-sharp" size={34} color="#fff" />
            </Circle>
            <Heading color={"#fff"} ml={"34%"}>
              KYC
            </Heading>
          </Head>
          <Main>
            {renderStepContent()}
            <View>
              {step > 1 && (
                <Button onPress={handlePreviousStep}>
                  <Text>Previous</Text>
                </Button>
              )}
              {/* {step < 4 && (
              <Button onPress={handleNextStep}>
                <Text>Next</Text>
              </Button>
            )} */}
            </View>
          </Main>
        </VStack>
      </Container>
    </NativeBaseProvider>
  )
}
