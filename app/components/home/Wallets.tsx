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
  top: 0px;
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
  bottom: 30px;
`
const TabsBar = styled.View<{ theme: ThemeProps }>`
  flex-direction: row;
`
const TabItem = styled.TouchableOpacity<{ theme: ThemeProps }>`
  align-items: center;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #675438;
  margin: 2px;
  top: 0px;
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
    <OuterBox style={{ backgroundColor: "#ff4081" }}></OuterBox>
  )

  const SecondRoute = () => (
    <OuterBox style={{ backgroundColor: "#673ab7" }}></OuterBox>
  )

  const ThirdRoute = () => (
    <OuterBox style={{ backgroundColor: "#026ab7" }}></OuterBox>
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
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
    />
  )
}
