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
  top: 5px;
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

const Slogan = styled(Text)`
  color: #fff;
  width: 200px;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
`

const Title = styled(Text)`
  color: #fff;
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  margin-bottom: 10px;
`

const Side = styled(Box)`
  position: absolute;
  top: 180px;
  right: 0px;
`
// background: linear-gradient(90deg, #228b22 46%, #732995 100%);

export default function Welcome() {
  const router = useRouter()
  const bg = require("../../assets/images/welcomebg.png")
  const logo = require("../../assets/images/LogoWhite.png")

  const handleNext = () => {
    router.push("/onboarding")
  }

  return (
    <NativeBaseProvider>
      <Container>
        <Stack.Screen options={{ title: "Welcome" }} />
        <BackgroundImg source={bg} resizeMode="cover">
          <LogoWhite source={logo} alt="Alternate Text" />
          <Side>
            <Box
              bg={{
                linearGradient: {
                  colors: ["#0e32b4", "#228b22"],
                  start: [0, 0],
                  end: [1, 0],
                },
              }}
            >
              <Title>eWazobia</Title>
              <Slogan>
                Your one stop faster, secured payments starts with eWazobia.
              </Slogan>
            </Box>
          </Side>
          <Next onPress={handleNext}></Next>
        </BackgroundImg>
      </Container>
    </NativeBaseProvider>
  )
}
