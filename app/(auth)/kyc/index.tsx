import React, { useState, useEffect } from "react"
import { Ionicons } from "@expo/vector-icons"
import { useRootNavigationState } from "expo-router"
import { useRouter, useSegments } from "expo-router"
import {
  KeyboardAvoidingView,
  NativeBaseProvider,
  View,
  Button,
  Text,
  Container,
  Heading,
  Box,
} from "native-base"
import styled from "styled-components/native"
import { AuthStore } from "../../../config/store"
import InfoScreen from "./info"
import BvnScreen from "./bvn"
import IdUploadScreen from "./idupload"
import FaceverifyScreen from "./faceverify"
// Define the styled components

// Define the KYCProcess component
const KYCProcess = () => {
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
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Container>
          <Box>
            <Heading>KYC Process</Heading>
          </Box>
          <Box>{renderStepContent()}</Box>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16,
            }}
          >
            {step > 1 && (
              <Button onPress={handlePreviousStep}>
                <Text>Previous</Text>
              </Button>
            )}
            {step < 4 && (
              <Button onPress={handleNextStep}>
                <Text>Next</Text>
              </Button>
            )}
          </View>
        </Container>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  )
}

export default KYCProcess
