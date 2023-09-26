import React, { useState, useRef, useEffect, useContext } from "react"
import { Ionicons } from "@expo/vector-icons"
import DatePicker from "react-native-datepicker"
import DateTimePicker from "@react-native-community/datetimepicker"
import SelectDropdown from "react-native-select-dropdown"
import RNPickerSelect from "react-native-picker-select"

import { View, TouchableOpacity } from "react-native"
import {
  Camera,
  CameraType,
  CameraCapturedPicture,
  CameraPictureOptions,
} from "expo-camera"
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
  Pressable,
  Modal,
  Image,
} from "native-base"
import styled from "styled-components/native"
import { ThemeContext } from "../../../constants/ThemeContext"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeProps } from ".../../../types/styleTypes"
import Submit from "../../../components/Submit"

const BVNScreenContainer = styled(VStack)`
  margin-bottom: 80%;
`
const NamesInput = styled(Input)`
  width: 95px;
  left: 5px;
  color: #fff;
`
const InfoText = styled(Text)`
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
  top: 6%;
  margin-bottom: 10%;
`
const BvnStack = styled(VStack)`
  top: 10%;
  justify-content: center;
  padding: 10px;
  height: 30%;
  width: 100%
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.drawerColor};
  border-radius: 15px;
  elevation: 20;
  margin-bottom: 5%;
`
const CardText = styled(Text)`
  bottom: 15%;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  margin-bottom: 20px;
`
const Cam = styled(Camera)`
  width: 100%;
  height: 100%;
`
const CaputreStack = styled(VStack)`
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
const CamText = styled(Text)`
  bottom: 30%;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  margin-bottom: 20px;
`
const CamGuide = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`
const Circle = styled(TouchableOpacity)`
  height: 45px;
  width: 45px;
  background: #228b22
  border: 3px solid #FFF;
  border-radius: 50px;
`
const Img = styled(Image)`
  position: relative;
  top: -15%;
  right: 20%;
  height: 100px;
  width: 100px;
  border-radius: 50px;
`

interface BvnProps {
  handleBVNSubmit?: () => void
}

export default function BvnScreen(props: BvnProps) {
  const { mode, theme } = useContext(ThemeContext)
  const [bvn, setBVN] = useState("")
  const [wallet, setWalle] = useState("")
  const [nameMatched, setNameMatched] = useState(false)
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [faceMatched, setFaceMatched] = useState(false)
  const [type, setType] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [hasPermission, setHasPermission] = useState(false)
  const cameraRef = useRef<Camera>(null)
  const [showModal, setShowModal] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)

  // Function to handle BVN verification
  const verifyBVN = async () => {
    try {
      setNameMatched(true)
      // const response = await fetch(
      //   `https://api.example.com/verify-bvn?bvn=${bvn}`
      // )
      // if (response.ok) {
      //   const data = await response.json()
      //   const { matched } = data
      //   setNameMatched(matched)
      // } else {
      //   console.log("Error verifying BVN:", response.status)
      // }
    } catch (error) {
      console.log("Error verifying BVN:", error)
    }
  }

  // Function to handle face verification
  const verifyFace = async (photoUri: any) => {
    try {
      setFaceMatched(true)
      // const response = await fetch("https://api.example.com/verify-face", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ photoUri }),
      // })
      // if (response.ok) {
      //   const data = await response.json()
      //   const { matched } = data
      //   setFaceMatched(matched)
      // } else {
      //   console.log("Error verifying face:", response.status)
      // }
    } catch (error) {
      console.log("Error verifying face:", error)
    }
  }

  // Function to handle finishing the BVN step
  const finishBVNStep = () => {
    // Perform any necessary actions to complete the BVN step
    // e.g., navigate to the next step, update state, etc.
  }

  // Function to handle front and rear camera
  function toggleCamera() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.front
    )
  }
  // Open the camera
  function setCamModel() {
    setShowModal(true)
    setIsCameraActive(true)
    toggleCamera()
  }
  // close the camera
  function setCamClose() {
    setShowModal(false)
    setIsCameraActive(false)
  }
  // take photo of the user
  const handleCameraCapture = async () => {
    if (cameraRef.current) {
      const pictureOptions: CameraPictureOptions = {
        quality: 1,
      }
      const photo = await cameraRef.current.takePictureAsync(pictureOptions)
      setShowModal(false)
      setIsCameraActive(false)
      setCapturedImage(photo.uri)

      // Compare the captured photo with the image from the BVN API
      // Set faceMatched based on the comparison result
    }
  }
  // Check if camera permission is granted
  useEffect(() => {
    if (!hasPermission) {
      requestPermission()
    }
  }, [])

  return (
    <BVNScreenContainer>
      <InfoText>Step 2: Identity verification</InfoText>
      <FormControl justifyContent={"center"} alignItems={"center"}>
        {/* BVN Input Card */}
        <BvnStack theme={{ theme: themes[theme] }}>
          <CardText>BVN Verification</CardText>
          <NamesInput
            InputRightElement={
              !nameMatched && (
                <Ionicons name="checkmark-circle" size={25} color="#fff" />
              )
            }
            value={bvn}
            placeholder="BVN"
            onChangeText={setBVN}
            _focus={{
              borderColor: "#fff",
              fontSize: 16,
              color: "#fff",
            }}
          />
        </BvnStack>
        {/* Face Verification Card */}
        <BvnStack theme={{ theme: themes[theme] }}>
          <CamText>Face Verification</CamText>
          <TouchableOpacity onPress={setCamModel} disabled={nameMatched}>
            {isCameraActive ? (
              <Modal
                isOpen={showModal}
                onClose={setCamClose}
                bg={themes[theme].primaryColor}
              >
                <Modal.Content top={"3%"} h={"60%"} w={"95%"}>
                  <Modal.CloseButton bg={"#880808"} />
                  <Cam ref={cameraRef} type={type} />
                  <CaputreStack>
                    <CamGuide>
                      Align your face and shoulder to the cernter of the selfie
                      area and then take a photo
                    </CamGuide>
                    <Circle onPress={handleCameraCapture} />
                  </CaputreStack>
                </Modal.Content>
              </Modal>
            ) : (
              <Stack position={"absolute"} left={"40%"} top={-40}>
                {capturedImage ? (
                  <Img
                    source={{
                      uri: capturedImage,
                    }}
                    alt="Alternate Text"
                    size="xl"
                  />
                ) : (
                  <Ionicons name="camera" size={60} color={"#fff"} />
                )}
              </Stack>
            )}
            {faceMatched && (
              <Ionicons name="checkmark-circle" size={24} color="#fff" />
            )}
          </TouchableOpacity>
        </BvnStack>
        {/* Connect eNaira wallet */}
        <BvnStack theme={{ theme: themes[theme] }}>
          <CardText>eNaira wallet connect </CardText>
          <NamesInput
            InputRightElement={
              !faceMatched && (
                <Ionicons name="checkmark-circle" size={25} color="#fff" />
              )
            }
            value={wallet}
            placeholder="Enter your eNaira alias"
            onChangeText={setWalle}
            isReadOnly={!faceMatched}
            _focus={{
              borderColor: "#fff",
              fontSize: 16,
              color: "#fff",
            }}
          />
        </BvnStack>
        <HStack top={"15%"} justifyContent={"center"}>
          <Submit
            disabled={faceMatched}
            handlePress={props.handleBVNSubmit}
            submit="Finished"
          />
        </HStack>
      </FormControl>
    </BVNScreenContainer>
  )
}
