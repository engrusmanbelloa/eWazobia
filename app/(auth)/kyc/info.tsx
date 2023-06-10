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

// Define the styled components
const InfoScreenContainer = styled(Container)`
  padding: 16px;
`

const InfoScreenText = styled(Text)`
  font-size: 16px;
  margin-bottom: 16px;
`
interface InfoProps {
  handleInfoSubmit?: () => void
}

export default function InfoScreen(props: InfoProps) {
  const [step, setStep] = useState(1)
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  return (
    <InfoScreenContainer>
      <InfoScreenText>Step 1: Enter Your Basic Information</InfoScreenText>
      <FormControl>
        <Stack>
          <FormControl.Label>First Name</FormControl.Label>
          <Input
            value={basicInfo.firstName}
            onChangeText={(text) =>
              setBasicInfo((prevInfo) => ({ ...prevInfo, firstName: text }))
            }
          />
        </Stack>
        <Stack>
          <FormControl.Label>Last Name</FormControl.Label>
          <Input
            value={basicInfo.lastName}
            onChangeText={(text) =>
              setBasicInfo((prevInfo) => ({ ...prevInfo, lastName: text }))
            }
          />
        </Stack>
        <Stack>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            value={basicInfo.email}
            onChangeText={(text) =>
              setBasicInfo((prevInfo) => ({ ...prevInfo, email: text }))
            }
          />
        </Stack>
        <Stack>
          <FormControl.Label>Phone</FormControl.Label>
          <Input
            value={basicInfo.phone}
            onChangeText={(text) =>
              setBasicInfo((prevInfo) => ({ ...prevInfo, phone: text }))
            }
          />
        </Stack>
        <Button onPress={props.handleInfoSubmit}>
          <Text>Next</Text>
        </Button>
      </FormControl>
    </InfoScreenContainer>
  )
}
