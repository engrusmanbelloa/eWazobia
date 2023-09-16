import React, { useState } from "react"
import { View, TextInput, StyleSheet } from "react-native"
import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const PinInputContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
`

const PinInput = styled.TextInput`
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  margin: 5px;
  font-size: 24px;
  text-align: center;
`

export default function PinVerify() {
  const [pin, setPin] = useState<string>("")

  const handlePinChange = (index: number, value: string) => {
    const newPin = pin.split("")
    newPin[index] = value
    setPin(newPin.join(""))
  }

  return (
    <Container>
      <PinInputContainer>
        <PinInput
          value={pin[0]}
          onChangeText={(value: string) => handlePinChange(0, value)}
          keyboardType="numeric"
          maxLength={1}
        />
        <PinInput
          value={pin[1]}
          onChangeText={(value: string) => handlePinChange(1, value)}
          keyboardType="numeric"
          maxLength={1}
        />
        <PinInput
          value={pin[2]}
          onChangeText={(value: string) => handlePinChange(2, value)}
          keyboardType="numeric"
          maxLength={1}
        />
        <PinInput
          value={pin[3]}
          onChangeText={(value: string) => handlePinChange(3, value)}
          keyboardType="numeric"
          maxLength={1}
        />
      </PinInputContainer>
    </Container>
  )
}
