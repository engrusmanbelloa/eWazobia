import { useState, useContext, useEffect, ChangeEvent } from "react"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
  Animated,
} from "react-native"
import {
  NativeBaseProvider,
  Text,
  Box,
  Pressable,
  Input,
  Stack,
  VStack,
  HStack,
  Button,
  Modal,
  Avatar,
  ZStack,
} from "native-base"
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { TabView, SceneMap } from "react-native-tab-view"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"
import WalletsTabs from "../home/WalletTabs"

interface ThemeProps {
  mode: {
    backgroundColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
    drawerColor: string
  }
}

const boxShadowStyle = {
  shadowColor: "#fff",
  shadowOpacity: 0.5,
  elevation: 10,
}

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const OuterBox = styled(Box)<{ theme: ThemeProps }>`
  border-right-width: 5px;
  border-left-width: 0.5px;
  border-top-width: 1px;
  border-right-color: #fff;
  border-left-color: #fff;
  border-top-color: #fff;
  border-radius: 150px;
  width: 300px;
  height: 300px;
  bottom: 40px;
`

const InnerBox = styled(Box)<{ theme: ThemeProps }>`
  border-radius: 145px;
  align-items: center;
  width: 290px;
  height: 290px;
  top: -10px;
`
const TabsBar = styled.View<{ theme: ThemeProps }>`
  flex-direction: row;
  justify-content: center;
  top: 75%;
  z-index: 1;
`
const TabItem = styled.TouchableOpacity<{ theme: ThemeProps }>`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: #fff;
  margin-right: 10px;
`
const BalHead = styled(Text)`
  color: #fff;
  top: 20%;
  font-size: 18px;
  font-weight: 400;
`
const BalStack = styled(HStack)`
  top: 30%;
`
const Balance = styled(Text)`
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  line-height: 25px;
  margin-right: 5px;
`
const BalDecimal = styled(Text)`
  color: #fff;
  font-size: 10px;
  font-weight: 500;
`
const WalletBtn = styled.TouchableOpacity`
  top: 35%;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 40px;
  width: 60%;
`

export default function Wallets() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
  ])

  const FirstRoute = () => (
    <InnerBox>
      <BalHead>eNaira balance</BalHead>
      <BalStack>
        <MaterialCommunityIcons name="currency-ngn" size={20} color="#fff" />
        <Balance>1,000,000,000.</Balance>
        <BalDecimal>00</BalDecimal>
      </BalStack>
      <WalletBtn>
        <BalHead>Your eNaira wallet</BalHead>
      </WalletBtn>
    </InnerBox>
  )

  const SecondRoute = () => (
    <InnerBox>
      <BalHead>eEsusu balance</BalHead>
      <BalStack>
        <MaterialCommunityIcons name="currency-ngn" size={20} color="#fff" />
        <Balance>1,000,000,000.</Balance>
        <BalDecimal>00</BalDecimal>
      </BalStack>
      <WalletBtn>
        <BalHead>Your fixed esusu</BalHead>
      </WalletBtn>
    </InnerBox>
  )

  const ThirdRoute = () => (
    <InnerBox>
      <BalHead>eEsusu balance</BalHead>
      <BalStack>
        <MaterialCommunityIcons name="currency-ngn" size={20} color="#fff" />
        <Balance>1,000,000,000.</Balance>
        <BalDecimal>00</BalDecimal>
      </BalStack>
      <WalletBtn>
        <BalHead>Your flexible esusu</BalHead>
      </WalletBtn>
    </InnerBox>
  )

  const handleIndexChange = (index: number) => setIndex(index)

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (x: any, i: number) => i
    )

    return (
      <TabsBar>
        {props.navigationState.routes.map((route: any, i: number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5
            ),
          })

          return (
            <TabItem key={route.key} onPress={() => setIndex(i)}>
              <Animated.Text style={{ opacity }}></Animated.Text>
            </TabItem>
          )
        })}
      </TabsBar>
    )
  }
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  })

  return (
    <Container>
      <OuterBox>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={handleIndexChange}
        />
      </OuterBox>
    </Container>
  )
}
