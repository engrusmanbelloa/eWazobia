import React from "react"
import { useState, useContext, ReactNode } from "react"
import { AuthStore } from "../config/store"
import { KeyboardAvoidingView, ScrollView, Platform } from "react-native"
import { Text, Box, VStack, Modal, Stack } from "native-base"
import { useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { modeTheme, themes } from "../constants/Themes"
import { ThemeContext } from "../constants/ThemeContext"
import Submit from "./Submit"
import OtpPage from "./Otp"

const ModalBox = styled(Modal)`
  background: red;
  width: 100%;
  height: 65%;
  top: 40%;
  border-radius: 15px;
`
const ModalContent = styled(VStack)`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  bottom: 0%;
  flex: 1;
`
const ModalOuterStack = styled(Stack)`
  top: 40px;
  flex: 1;
`
const ModalInnerStack = styled(VStack)`
  justify-content: center;
  align-items: center;
`
const ModalTex = styled(Text)`
  top: 25px;
  left: 25px;
  margin-bottom: 10%;
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
  top: 5%;
  color: #0e32b4;
`

interface ModalComponentProps {
  isModalVisible: boolean
  setIsModalVisible: (visible: boolean) => void
  showOtpPage?: boolean
  showIcon?: boolean
  iconName?: any
  iconSize?: number
  showBtn?: boolean
  title: string
  intro?: string
  handlePress?: () => void
  handleIcon?: () => void
  info?: string
  infoLink?: string
  infoLinkText?: string
  modalX?: string
  submit?: string
  inputNums?: number
  otpMessage?: string
  children?: ReactNode
}

export default function ModalComponent(props: ModalComponentProps) {
  const { mode, theme } = useContext(ThemeContext)
  const {
    isModalVisible,
    setIsModalVisible,
    showOtpPage,
    showIcon,
    iconName,
    iconSize,
    showBtn,
    title,
    intro,
    handlePress,
    handleIcon,
    info,
    infoLink,
    infoLinkText,
    modalX,
    submit,
    children,
    inputNums,
    otpMessage,
  } = props

  return (
    <ModalBox
      isOpen={isModalVisible}
      avoidKeyboard
      onClose={() => setIsModalVisible(false)}
    >
      <ModalContent>
        <ModalTex>{title}</ModalTex>
        <ModalOuterStack>
          <ModalInnerStack>
            {children}
            {showIcon && (
              <Ionicons
                onPress={handleIcon}
                name={iconName}
                size={iconSize}
                color={themes[theme].primaryColor}
              />
            )}
            {showOtpPage && (
              <OtpPage
                otpMessage={otpMessage}
                inputNums={inputNums ? inputNums : 0}
              />
            )}
            <ModalIntro>{intro}</ModalIntro>
            <Box w={"75%"} top={"0"}>
              <Submit handlePress={handlePress} submit={submit} />
            </Box>
            <ModalInfo>
              {info}&nbsp;
              <TermsLink href={infoLink}>{infoLinkText}</TermsLink>
            </ModalInfo>
            <ModalCancel onPress={() => setIsModalVisible(false)}>
              {modalX}
            </ModalCancel>
          </ModalInnerStack>
        </ModalOuterStack>
      </ModalContent>
    </ModalBox>
  )
}
