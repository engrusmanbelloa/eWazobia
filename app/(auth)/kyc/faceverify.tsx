import React, { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import {
  KeyboardAvoidingView,
  View,
  Button,
  Text,
  Input,
  Container,
  Stack,
  FormControl,
} from "native-base"
import styled from "styled-components/native"

const InfoScreenText = styled(Text)`
  font-size: 16px;
  margin-bottom: 16px;
`
const FaceVerificationScreenContainer = styled(Container)`
  padding: 16px;
`

interface IdProps {
  handleFaceVerify?: () => void
}
export default function FaceverifyScreen(props: IdProps) {
  return (
    <FaceVerificationScreenContainer>
      <InfoScreenText>Step 4: Verify Your Face</InfoScreenText>
      {/* Implement face verification functionality */}
      <Button onPress={props.handleFaceVerify}>
        <Text>Next</Text>
      </Button>
    </FaceVerificationScreenContainer>
  )
}
