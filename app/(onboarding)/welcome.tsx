import { StyleSheet, View, ImageBackground } from "react-native"
import { Link, Stack, useRouter } from "expo-router"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { NativeBaseProvider, Text, Box, Pressable, Image } from "native-base"
import { AuthStore } from "../../config/store"

const Container = styled(SafeAreaView)`
  flex: 1;
`
const BackgroundImg = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
`
const LogoWhite = styled(Image)`
  width: 50%;
  height: 30px;
  position: absolute;
  top: 15px;
  left: 5px;
`
const Next = styled(Pressable)`
  width: 100px;
  height: 100px;
  background: #fff;
  position: absolute;
  bottom: 40px;
  left: 40px;
  opacity: 0;
`
const Title = styled(Text)`
  color: #fff;
  position: absolute;
  top: 150px;
  left: 40px;
  font-size: 80px;
  font-weight: 700;
  line-height: 80px;
`
const Slogan = styled(Text)`
  color: #fff;
  position: absolute;
  top: 230px;
  right: 10px;
  width: 200px;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
`

const Naira = styled(Text)`
  color: #fff;
  position: absolute;
  bottom: 230px;
  left: 100px;
  font-size: 60px;
  font-weight: 700;
  line-height: 80px;
  margin-bottom: 10px;
`

const ActivePlaces = styled(Text)`
  color: #fff;
  position: absolute;
  bottom: 140px;
  left: 30px;
  width: 130px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`

const NairaImg = styled(Image)`
  width: 50%;
  height: 25%;
  position: absolute;
  bottom: 15px;
  right: 5px;
`

// background: linear-gradient(90deg, #228b22 46%, #732995 100%);

export default function Welcome() {
  const router = useRouter()
  const bg = require("../../assets/images/welcomebg.png")
  const logo = require("../../assets/images/LogoWhite.png")
  const naira = require("../../assets/images/naira.png")

  const handleNext = () => {
    router.push("/onboarding")
  }

  return (
    <NativeBaseProvider>
      <Container>
        <Stack.Screen options={{ title: "Welcome" }} />
        <BackgroundImg source={bg} resizeMode="cover">
          <LogoWhite source={logo} alt="Alternate Text" />
          <Title>eWazobia</Title>
          <Slogan>
            Your one stop faster, secured payments starts with eWazobia.
          </Slogan>
          <Naira>eNaira</Naira>
          <ActivePlaces>Currently active in 50+ universities</ActivePlaces>
          <NairaImg source={naira} alt="Alternate Text" />
          <Next onPress={handleNext}></Next>
        </BackgroundImg>
      </Container>
    </NativeBaseProvider>
  )
}
