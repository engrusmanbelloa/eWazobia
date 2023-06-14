import React, { useState, useEffect } from "react"
import { Ionicons } from "@expo/vector-icons"
import DatePicker from "react-native-datepicker"
import DateTimePicker from "@react-native-community/datetimepicker"
import SelectDropdown from "react-native-select-dropdown"
import RNPickerSelect from "react-native-picker-select"
import {
  KeyboardAvoidingView,
  Button,
  Text,
  Input,
  Stack,
  FormControl,
  HStack,
  Box,
  VStack,
  Select,
} from "native-base"
import styled from "styled-components/native"
import Submit from "../../components/Submit"

const BVNScreenContainer = styled(KeyboardAvoidingView)`
  flex: 1;
  width: 100%;
  top: 5px;
  padding: 10px;
`
const NamesInput = styled(Input)`
  width: 95px;
  left: 5px;
`
const InfoText = styled(Text)`
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
  top: 30px;
  margin-bottom: 40px;
`
interface BvnProps {
  handleBVNSubmit?: () => void
}

export default function BvnScreen(props: BvnProps) {
  const [bvn, setBVN] = useState("")

  return (
    <BVNScreenContainer>
      <InfoText>Step 2: Enter Your BVN</InfoText>
      <FormControl>
        <HStack bottom={"20%"} justifyContent={"center"}>
          <Stack top={"40%"} w={"90%"}>
            <NamesInput value={bvn} placeholder="BVN" onChangeText={setBVN} />
          </Stack>
        </HStack>
        <HStack top={"50%"} justifyContent={"center"}>
          <Stack w={"90%"}>
            <Submit handlePress={props.handleBVNSubmit} submit="Next" />
          </Stack>
        </HStack>
      </FormControl>
    </BVNScreenContainer>
  )
}
