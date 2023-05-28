import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
} from "react-native"

import {
  Link,
  Stack,
  useNavigation,
  useRootNavigation,
  useRouter,
} from "expo-router"
import styled from "styled-components/native"
import { AuthStore } from "../../config/store"

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #228b22;
`

const BackgroundImg = styled.ImageBackground`
  flex: 1;
  z-index: 99;
`
// background: linear-gradient(90deg, #228b22 46%, #732995 100%);

export default function Welcome() {
  const router = useRouter()
  const bg = require("../../assets/images/welcome.png")

  const handleNext = () => {
    router.push("/onboarding")
  }

  return (
    <Container>
      <Stack.Screen options={{ title: "Welcome" }} />
      <BackgroundImg source={bg} resizeMode="cover">
        <Text>head</Text>
      </BackgroundImg>
      {/* <Text>Welcome to eWazobia</Text> */}
      {/* <Text onPress={handleNext}>Next</Text> */}
    </Container>
  )
}
