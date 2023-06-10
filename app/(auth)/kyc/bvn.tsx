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

const BVNScreenContainer = styled(Container)`
  padding: 16px;
`
const InfoScreenText = styled(Text)`
  font-size: 16px;
  margin-bottom: 16px;
`
interface BvnProps {
  handleBVNSubmit?: () => void
}

export default function BvnScreen(props: BvnProps) {
  const [bvn, setBVN] = useState("")
  return (
    <BVNScreenContainer>
      <InfoScreenText>Step 2: Enter Your BVN</InfoScreenText>
      <FormControl>
        <Stack>
          <FormControl.Label>BVN</FormControl.Label>
          <Input value={bvn} onChangeText={setBVN} />
        </Stack>
        <Button onPress={props.handleBVNSubmit}>
          <Text>Next</Text>
        </Button>
      </FormControl>
    </BVNScreenContainer>
  )
}
