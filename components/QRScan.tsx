import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Button,
} from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import React, { useState, useEffect } from "react"
import * as ImagePicker from "expo-image-picker"
import { Ionicons } from "@expo/vector-icons"
import {
  KeyboardAvoidingView,
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
  Divider,
  Image,
  Avatar,
} from "native-base"
import styled from "styled-components/native"

const Container = styled(VStack)`
  width: 100%;
  height: 100%;
  alignitems: center;
  justifycontent: center;
  background-color: #fff;
`
const Cam = styled(Stack)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: blue;
`
const Scanner = styled(BarCodeScanner)`
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
const ScanStack = styled(VStack)`
  top: 0%;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #4556;
`
const CamGuide = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`
const UserBox = styled(VStack)`
  width: 25%;
  height: 35%;
  top: 20px;
  align-items: center;
  border-radius: 15px;
  background-color: #876;
`
const UserName = styled(Text)`
  top: 20%;
  color: #fff;
  font-size: 16px;
  width: 100%;
  text-align: center;
`
const Circle = styled(TouchableOpacity)`
  height: 45px;
  width: 45px;
  background: #228b22
  border: 3px solid #FFF;
  border-radius: 50px;
`
const GetScanned = styled(TouchableOpacity)`
  top: 15%;
  background-color: blue;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  border-radius: 5px;
  width: 50%;
  align-items: center;
  justify-content: center;
`
const GetScannedTxt = styled(Text)`
  color: white;
  top: 50%;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
const ScanCircle = styled(Box)`
  width: 110px;
  height: 110px;
  bottom: 25%;
  border-radius: 120px;
  justify-content: center;
  align-items: center;
  border-width: 10px;
  border-right-color: #fff;

  border-top-left-color: #543;
  border-left-color: #fff;
`

export default function QRScan() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)
  const [data, setData] = useState<string | null>(null)
  const [image, setImage] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [isCameraActive, setIsCameraActive] = useState(false)
  const avater =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  // Open the camera
  function setCamModel() {
    setShowModal(true)
    setIsCameraActive(true)
    setScanned(false)
  }
  // close the camera
  function setCamClose() {
    setShowModal(false)
    setIsCameraActive(false)
  }
  // pick image from gallery
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      const barcodes = await BarCodeScanner.scanFromURLAsync(
        result.assets[0].uri
      )
      if (barcodes.length > 0) {
        const { type, data } = barcodes[0]
        console.log("QR Code: ", data)
        setData(data)
      } else {
        console.log("No QR code detected in the image.")
      }
    }
  }

  useEffect(() => {
    if (!hasPermission) {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync()
        setHasPermission(status === "granted")
      }
      getBarCodeScannerPermissions()
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!")
        }
      }
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true)
    setData(data)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  const renderCamera = () => {
    return (
      <Cam>
        <Scanner
          //   style={{ width: "50%", height: "100%" }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </Cam>
    )
  }
  return (
    <Container>
      {isCameraActive ? (
        <Modal isOpen={showModal} onClose={setCamClose}>
          <Modal.Content top={"10%"} h={"60%"} w={"100%"}>
            <Modal.CloseButton bg={"#880808"} />
            {renderCamera()}
            <CaputreStack>
              <CamGuide>
                Align the QR code to the center of the scanner area
              </CamGuide>
              <Circle onPress={pickImage} />
            </CaputreStack>
          </Modal.Content>
        </Modal>
      ) : (
        <ScanStack>
          <UserBox>
            <TouchableOpacity>
              <Avatar
                size={70}
                top={4}
                source={{
                  uri: avater,
                }}
              >
                AJ
              </Avatar>
            </TouchableOpacity>
            <UserName>Bello Abdullahi</UserName>
          </UserBox>
          <GetScanned onPress={setCamModel} disabled={scanned}>
            <ScanCircle></ScanCircle>
          </GetScanned>
          <GetScannedTxt>Scan QR to pay</GetScannedTxt>
          <Button title="Pick QR from gallary" onPress={pickImage} />
          {data && <Text>QR Code Data: {data}</Text>}
        </ScanStack>
      )}
    </Container>
  )
}
