import { Link, Stack, useRouter } from "expo-router"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { NativeBaseProvider, Text, Box, Pressable, HStack } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AuthStore } from "../../config/store"

const Container = styled(SafeAreaView)`
  flex: 1;
  background: #228b22;
`
const Title = styled(Text)`
  color: #fff;
  position: absolute;
  top: 50px;
  left: 30px;
  font-size: 30px;
  font-weight: 700;
  line-height: 80px;
`
const SubHeading = styled(Text)`
  color: #fff;
  margin-top: 110px;
  left: 30px;
  font-size: 25px;
  font-weight: 300;
  line-height: 40px;
  width: 90%;
`
const List = styled(Box)`
  color: #fff;
  margin-top: 10px;
  left: 30px;
`
const Li = styled(Text)`
  color: #fff;
  width: 80%;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  margin-top: 15px;
  margin-left: 10px;
`
const Circle = styled(Box)`
  height: 45px;
  width: 45px;
  top: 30px;
  left: 35px;
  border: 1px solid #fff;
  border-radius: 50px;
`
const Getstarted = styled(Pressable)`
  bottom: 70px;
  width: 40%;
  height: 40px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 10px;
  background: transparent;
`

const MemberBox = styled(Text)`
  bottom: 40px;
  width: 60%;
  left: 25%;
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  background: transparent;
`

const SignIn = styled(Link)`
  color: #0e32b4;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
`
const SignUp = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`

export default function Onboarding() {
  const list = [
    "Unlock the power of digital Payments, where Payments meet convenience.",
    "Explore hundreds of shops around you for all your needs and make seamless payments with eNaira.",
    "Get recomendations based on your search and preferences.",
    "Are you a business owner? Go digital with your business by creating your own shop on eWazobia.",
  ]

  return (
    <NativeBaseProvider>
      <Container>
        <Stack.Screen options={{ title: "Welcome" }} />
        <Title>eWazobia app:</Title>
        <SubHeading>
          Unlock the power of digital payments, where payments meet convenience.
        </SubHeading>
        <List>
          {list.map((item) => (
            <HStack key={item.toString()}>
              <MaterialCommunityIcons
                name="slash-forward-box"
                size={24}
                color="#FFF"
                style={{ marginTop: 20 }}
              />
              <Li>{item}</Li>
            </HStack>
          ))}
        </List>
        <Circle></Circle>
        <Circle></Circle>
        <Getstarted isHovered>
          <SignUp href="/register">Get started</SignUp>
        </Getstarted>
        <MemberBox>
          Already a member?&nbsp;&nbsp;
          <SignIn href="/login">Sign in</SignIn>
        </MemberBox>
      </Container>
    </NativeBaseProvider>
  )
}
