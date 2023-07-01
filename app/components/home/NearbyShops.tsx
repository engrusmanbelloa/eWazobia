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
    activeColor: string
  }
  active: boolean
}

const Container = styled(SafeAreaView)<{ theme: ThemeProps }>`
  top: -30px;
  height: 40%;
  width: 100%;
`

const TabsBar = styled.View<{ active: boolean; theme: ThemeProps }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background-color: ${({
    active,
    theme,
  }: {
    active: boolean
    theme: ThemeProps
  }) => (active ? theme.theme.activeColor : theme.theme.primaryColor)};
`

const TabItem = styled.TouchableOpacity<{ active: boolean; theme: ThemeProps }>`
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 49%;
  border-radius: 50px;
  top: 0px;
  background-color: ${({
    active,
    theme,
  }: {
    active: boolean
    theme: ThemeProps
  }) => (active ? theme.theme.activeColor : theme.theme.primaryColor)};
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
    { key: "nearby", title: "Nearby Shops" },
    { key: "tx", title: "Transactions" },
  ])

  const handleIndexChange = (currentIndex: number) => {
    setIndex(currentIndex)
  }

  const NearbyRoute = () => (
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

  const TxRoute = () => (
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
      <TabsBar theme={{ theme: themes[theme] }}>
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
              theme={{ theme: themes[theme] }}
              onPress={() => setIndex(i)}
            >
              <Animated.Text
                style={{
                  opacity,
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                {route.title}
              </Animated.Text>
            </TabItem>
          )
        })}
      </TabsBar>
    )
  }

  const renderScene = SceneMap({
    nearby: NearbyRoute,
    tx: TxRoute,
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
