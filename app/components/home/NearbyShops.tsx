import { useState, useContext, useEffect, ChangeEvent } from "react"
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native"
import {
  TabView,
  SceneMap,
  NavigationState,
  Route,
  SceneRendererProps,
} from "react-native-tab-view"
import {
  NativeBaseProvider,
  VStack,
  ScrollView,
  Box,
  HStack,
  Text,
} from "native-base"
import styled from "styled-components/native"
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { modeTheme, themes } from "../../../constants/Themes"
import { ThemeContext } from "../../../constants/ThemeContext"

interface RouteProps {
  key: string
  title: string
}

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

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

const TabsBar = styled.View<{ theme: ThemeProps }>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const TabItem = styled.TouchableOpacity<{ active: boolean }>`
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 30px;
  border-radius: 5px;
  margin: 2px;
  top: 0px;
  background-color: ${({ active }: any) => (active ? "#675438" : "#000")};
`
const InnerBox = styled(Box)<{ theme: ThemeProps }>`
  border-radius: 145px;
  align-items: center;
  width: 290px;
  height: 290px;
  top: -10px;
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

export default function NearByShops() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const [index, setIndex] = useState(0)
  const [routes] = useState<RouteProps[]>([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ])

  const handleIndexChange = (currentIndex: number) => {
    setIndex(currentIndex)
  }

  const FirstRoute = () => (
    <InnerBox>
      <BalHead>eNaira balance</BalHead>
      <BalStack>
        <MaterialCommunityIcons name="currency-ngn" size={20} color="#fff" />
        <Balance>100,000,000,000.</Balance>
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

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<RouteProps>
    }
  ) => {
    const inputRange = props.navigationState.routes.map(
      (x: any, i: number) => i
    )

    return (
      <TabsBar>
        {props.navigationState.routes.map((route: RouteProps, i: number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5
            ),
          })

          return (
            <TabItem
              key={route.key}
              active={index === i}
              onPress={() => setIndex(i)}
            >
              <Animated.Text style={{ opacity, color: "#fff" }}>
                {route.title}
              </Animated.Text>
            </TabItem>
          )
        })}
      </TabsBar>
    )
  }

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })

  return (
    <Container>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
      />
    </Container>
  )
}
