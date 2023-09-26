import { TouchableOpacity, Platform } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import React, { useState, useEffect, useContext } from "react"
import * as ImagePicker from "expo-image-picker"
import { Ionicons } from "@expo/vector-icons"
import { Text, Stack, HStack, Box, VStack, Modal, Avatar } from "native-base"
import styled from "styled-components/native"
import { ThemeContext } from "../constants/ThemeContext"
import { modeTheme, themes } from "../constants/Themes"
import { ThemeProps } from "../types/styleTypes"

const Container = styled(VStack)`
  width: 100%;
  height: 100%;
  alignitems: center;
  justifycontent: center;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
`
const Cam = styled(Stack)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const Scanner = styled(BarCodeScanner)`
  width: 100%;
  height: 99%;
  align-items: center;
  justify-content: center;
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
  bottom: 2%;
  width: 100%;
  height: 100%;
  align-items: center;
`
const CamGuide = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  width: 70%;
`
const UserBox = styled(VStack)`
  width: 25%;
  height: 35%;
  top: 5%;
  align-items: center;
  border-radius: 15px;
  background-color: #876;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.activeColor};
`
const UserName = styled(Text)`
  top: 20%;
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.primaryColor};
  font-size: 16px;
  width: 100%;
  text-align: center;
`
const Circle = styled(Box)`
  height: 45px;
  width: 45px;
  background: ${({ theme }: { theme: ThemeProps }) => theme.theme.primaryColor};
  border: 3px solid #fff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`
const GetScanned = styled(TouchableOpacity)`
  top: 10%;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`
const GetScannedTxt = styled(Text)`
  color: #fff;
  top: 15%;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 50%;
`
const ScanCircle = styled(Box)`
  width: 90px;
  height: 90px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  border-width: 7px;
  border-bottom-color: #fff;
  border-right-color: #fff;
  border-top-color: #234;
  text-align: center;
`

export default function QRScan() {
  const { mode, theme } = useContext(ThemeContext)
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
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </Cam>
    )
  }
  return (
    <Container theme={{ theme: themes[theme] }}>
      {isCameraActive ? (
        <Modal
          isOpen={showModal}
          onClose={setCamClose}
          bg={themes[theme].textColor}
          opacity={0.8}
        >
          <Modal.Content top={"10%"} h={"70%"} width={"95%"}>
            <Modal.CloseButton bg={"#880808"} />
            {renderCamera()}
            <CaputreStack>
              <CamGuide>
                Align the QR code to the center of the scanner area
              </CamGuide>
              <Circle theme={{ theme: themes[theme] }}>
                <TouchableOpacity onPress={pickImage}>
                  <Ionicons
                    size={25}
                    name="ios-images"
                    color={themes[theme].textColor}
                  />
                </TouchableOpacity>
              </Circle>
            </CaputreStack>
          </Modal.Content>
        </Modal>
      ) : !data ? (
        <ScanStack>
          <UserBox theme={{ theme: themes[theme] }}>
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
            <UserName theme={{ theme: themes[theme] }}>
              Bello Abdullahi
            </UserName>
          </UserBox>
          <GetScanned onPress={setCamModel} disabled={scanned}>
            <ScanCircle>
              <Ionicons
                size={60}
                name="ios-scan-outline"
                color={themes[theme].textColor}
              />
            </ScanCircle>
          </GetScanned>
          <GetScannedTxt>Touch the QR scanner to get started</GetScannedTxt>
          <Text color={themes[theme].textColor} top={"17%"}>
            Or
          </Text>
          <HStack top={"20%"}>
            <Text color={themes[theme].textColor} right={2}>
              Click here to pick from gallery
            </Text>
            <TouchableOpacity onPress={pickImage}>
              <Ionicons
                size={20}
                name="ios-images"
                color={themes[theme].textColor}
              />
            </TouchableOpacity>
          </HStack>
        </ScanStack>
      ) : (
        <Box>{data && <Text>QR Code Data: {data}</Text>}</Box>
      )}
    </Container>
  )
}
