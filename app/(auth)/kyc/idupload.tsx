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

const IDUploadScreenContainer = styled(Container)`
  padding: 16px;
`
const InfoScreenText = styled(Text)`
  font-size: 16px;
  margin-bottom: 16px;
`
interface IdProps {
  handleIDUpload?: () => void
}

export default function IdUploadScreen(props: IdProps) {
  return (
    <IDUploadScreenContainer>
      <InfoScreenText>Step 3: Upload Your ID</InfoScreenText>
      {/* Implement ID image upload functionality */}
      <Button onPress={props.handleIDUpload}>
        <Text>Next</Text>
      </Button>
    </IDUploadScreenContainer>
  )
}
