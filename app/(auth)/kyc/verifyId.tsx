import React, { useState, useRef, useEffect } from "react"
import { Ionicons } from "@expo/vector-icons"
import DatePicker from "react-native-datepicker"
import DateTimePicker from "@react-native-community/datetimepicker"
import SelectDropdown from "react-native-select-dropdown"
import RNPickerSelect from "react-native-picker-select"
import { View, TouchableOpacity, Platform } from "react-native"
import { Camera, CameraType } from "expo-camera"
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
  color: #fff;
`
const InfoText = styled(Text)`
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
  top: 30px;
  margin-bottom: 10px;
`
const BvnStack = styled(VStack)`
  top: 40px;
  justify-content: center;
  align-items: center;
  height: 130px;
  background: #228b22;
  border-radius: 5px;
  elevation: 20;
  margin-bottom: 20px;
`
const CardText = styled(Text)`
  bottom: 5px;
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
  bottom: 30px;
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

interface BvnProps {
  handleBVNSubmit?: () => void
}

export default function BvnScreen(props: BvnProps) {
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
      const photo = await cameraRef.current.takePictureAsync()
      setShowModal(false)
      setIsCameraActive(false)
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
      <FormControl>
        {/* BVN Input Card */}
        <BvnStack>
          <Stack w={"95%"}>
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
          </Stack>
        </BvnStack>
        {/* Face Verification Card */}
        <BvnStack>
          <Stack w={"95%"}>
            <CamText>Face Verification</CamText>
            <TouchableOpacity onPress={setCamModel} disabled={nameMatched}>
              {isCameraActive ? (
                <Modal isOpen={showModal} onClose={setCamClose}>
                  <Modal.Content top={"3%"} h={"60%"} w={"95%"}>
                    <Modal.CloseButton bg={"#880808"} />
                    <Cam ref={cameraRef} type={type} />
                    <CaputreStack>
                      <CamGuide>
                        Align your face and shoulder to the cernter of the
                        selfie area and then take a photo
                      </CamGuide>
                      <Circle onPress={handleCameraCapture} />
                    </CaputreStack>
                  </Modal.Content>
                </Modal>
              ) : (
                <Stack position={"absolute"} left={"40%"} top={-40}>
                  <Ionicons name="camera" size={70} color={"#fff"} />
                </Stack>
              )}
              {faceMatched && (
                <Ionicons name="checkmark-circle" size={24} color="#fff" />
              )}
            </TouchableOpacity>
          </Stack>
        </BvnStack>
        {/* Connect eNaira wallet */}
        <BvnStack>
          <Stack w={"95%"}>
            <CardText>Connect your eNaira</CardText>
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
          </Stack>
        </BvnStack>
        <HStack top={"18%"} justifyContent={"center"}>
          <Stack w={"100%"}>
            <Submit
              disabled={faceMatched}
              handlePress={props.handleBVNSubmit}
              submit="Finished"
            />
          </Stack>
        </HStack>
      </FormControl>
    </BVNScreenContainer>
  )
}
