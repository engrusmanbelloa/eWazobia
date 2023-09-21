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
  Image,
} from "native-base"
import styled from "styled-components/native"

const Container = styled(VStack)`
  flex: 1;
  alignitems: center;
  justifycontent: center;
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
const GetScanned = styled(TouchableOpacity)`
  background-color: blue;
  padding-horizontal: 20px;
  padding-vertical: 10px;
  border-radius: 5px;
`
const GetScannedTxt = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

export default function QRScan() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)
  const [data, setData] = useState<string | null>(null)
  const [image, setImage] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [isCameraActive, setIsCameraActive] = useState(false)

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
        <VStack top={"35%"} bg={"blue.100"}>
          <GetScanned onPress={setCamModel} disabled={scanned}>
            <GetScannedTxt>Scan QR to pay</GetScannedTxt>
          </GetScanned>
          <Button title="Pick QR from gallary" onPress={pickImage} />
          {data && <Text>QR Code Data: {data}</Text>}
        </VStack>
      )}
    </Container>
  )
}
