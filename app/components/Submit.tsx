import React from "react"
import styled from "styled-components/native"
import {
  NativeBaseProvider,
  HStack,
  Text,
  Box,
  Input,
  Button,
} from "native-base"
import { Stack, useRouter, Link } from "expo-router"

const SubmitButton = styled(Button)`
  top: 10%;
  width: 100%;
  height: 40px;
  background: #228b22;
  border-radius: 50px;
`

const SubmitButtonText = styled(Text)`
  color: #fff;
  font-size: 20px;
`

const submit = (props: any) => {
  const { handlePress, submit } = props
  return (
    <>
      <SubmitButton onPress={handlePress}>
        <SubmitButtonText>{submit}</SubmitButtonText>
      </SubmitButton>
    </>
  )
}

export default submit
