import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Button,
  DrawerLayoutAndroid,
} from "react-native"
import { useState, useContext, useRef, useEffect, ChangeEvent } from "react"
import { NativeBaseProvider, VStack, ScrollView } from "native-base"
import { Stack, useRouter, Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthStore } from "../../../config/store"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"
import { TabView, SceneMap } from "react-native-tab-view"

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

const Container = styled.View<{ theme: ThemeProps }>`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const TabsBar = styled.View<{ theme: ThemeProps }>`
  justify-content: center;
  flex-direction: row;
  padding-top: 10px;
`
const TabItem = styled.TouchableOpacity<{ theme: ThemeProps }>`
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
  height: 10px;
  width: 10px;
  background-color: #675438;
  margin: 2px;
  top: 0px;
`

export default function WalletTabs() {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
  ])

  const FirstRoute = () => <Container style={{ backgroundColor: "#ff4081" }} />
  const SecondRoute = () => <Container style={{ backgroundColor: "#673ab7" }} />
  const ThirdRoute = () => <Container style={{ backgroundColor: "#026ab7" }} />

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
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5
            ),
          })

          ;<TabItem onPress={() => setIndex(i)}>
            <Animated.Text style={{ opacity }}></Animated.Text>
          </TabItem>
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
