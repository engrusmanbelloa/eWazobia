import React from "react"
import { useState, ChangeEvent } from "react"
import { AuthStore } from "../../config/store"
import { KeyboardAvoidingView } from "react-native"
import { Text, Box, VStack, Modal } from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import Submit from "./Submit"
import OtpPage from "../components/Otp"

const ModalBox = styled(Modal)`
  background: red;
  width: 100%;
  height: 80%;
  top: 25%;
  border-radius: 15px;
`
const ModalContent = styled(VStack)`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  bottom: 0%;
`
const ModalStack = styled(VStack)`
  justify-content: center;
  align-items: center;
  top: 80px;
`
const ModalTex = styled(Text)`
  top: 25px;
  left: 25px;
  margin-bottom: 20%;
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
`
const ModalIntro = styled(Text)`
  top: 25px;
  margin-bottom: 20%;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  text-align: center;
`
const ModalInfo = styled(Text)`
  color: #000;
  top: 30%;
  left: 5px;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 1px;
`
const TermsLink = styled(Link)`
  color: #0e32b4;
  font-size: 14px;
  font-weight: 600;
`
const ModalCancel = styled(Text)`
  top: 40%;
  color: #0e32b4;
`

interface ModalComponentProps {
  isModalVisible: boolean
  setIsModalVisible: (visible: boolean) => void
  showOtpPage?: boolean
  title: string
  intro?: string
  handlePress: () => void
  info?: string
  infoLink?: string
  infoLinkText?: string
  modalX?: string
  submit?: string
}

export default function ModalComponent(props: ModalComponentProps) {
  // const [isModalVisible, setIsModalVisible] = useState(false)
  const {
    isModalVisible,
    setIsModalVisible,
    showOtpPage,
    title,
    intro,
    handlePress,
    info,
    infoLink,
    infoLinkText,
    modalX,
    submit,
  } = props
  // const title = "Success"
  // const info = "Didn't recieve the code?"
  // const infoLinkText = "Resend"
  //   const modalX = "Back to Sign up"
  //   const infoLink = "/register"
  // const intro = " Congratulations You have successfully signed up!"

  return (
    <>
      <ModalBox
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <ModalContent>
          <ModalTex>{title}</ModalTex>
          <ModalStack>
            {showOtpPage && <OtpPage />}
            <ModalIntro>{intro}</ModalIntro>
            <Box w={"75%"}>
              <Submit handlePress={handlePress} submit={submit} />
            </Box>
            <ModalInfo>
              {info}&nbsp;
              <TermsLink href={infoLink}>{infoLinkText}</TermsLink>
            </ModalInfo>
            <ModalCancel onPress={() => setIsModalVisible(false)}>
              {modalX}
            </ModalCancel>
          </ModalStack>
        </ModalContent>
      </ModalBox>
    </>
  )
}
