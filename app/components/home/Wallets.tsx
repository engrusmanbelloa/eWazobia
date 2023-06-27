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
  border-radius: 125px;
  width: 250px;
  height: 250px;
  bottom: 60px;
`

const InnerBox = styled(Box)<{ theme: ThemeProps }>`
  border-radius: 120px;
  width: 240px;
  height: 240px;
  top: -10px;
`
const TabsBar = styled.View<{ theme: ThemeProps }>`
  flex-direction: row;
  justify-content: center;
  top: 205px;
  z-index: 1;
`
const TabItem = styled.TouchableOpacity<{ theme: ThemeProps }>`
  align-items: center;
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: #675438;
  margin: 2px;
`

export default function Wallets() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
  ])

  const FirstRoute = () => <InnerBox></InnerBox>

  const SecondRoute = () => <InnerBox></InnerBox>

  const ThirdRoute = () => <InnerBox></InnerBox>

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
