import { useState, useContext, useEffect, ChangeEvent } from "react"
import { KeyboardAvoidingView, TouchableOpacity, Animated } from "react-native"
import { NativeBaseProvider, Text, Box, HStack } from "native-base"
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
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeContext } from "../../constants/ThemeContext"
import { ThemeProps } from "../../types/styleTypes"

const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const OuterBox = styled(Box)`
  border-right-width: 8px;
  border-left-width: 0.5px;
  border-top-width: 2px;
  border-right-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
  border-left-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
  border-top-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
  border-radius: 400px;
  width: 90%;
  height: 200%;
  bottom: 30%;
`

const InnerBox = styled(Box)`
  border-radius: 345px;
  align-items: center;
  width: 100%;
  height: 100%;
  top: -10px;
`
const TabsBar = styled.View`
  flex-direction: row;
  justify-content: center;
  top: 75%;
  z-index: 1;
`
const TabItem = styled.TouchableOpacity`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: #fff;
  margin: 0px 5px;
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
  top: 45%;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 40px;
  width: 60%;
`

export default function Wallets() {
  const { mode, theme } = useContext(ThemeContext)
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
            <TabItem
              key={route.key}
              onPress={() => setIndex(i)}
              style={[
                {
                  backgroundColor:
                    index === i ? themes[theme].activeColor : "#fff",
                },
              ]}
            >
              <Animated.View style={{ opacity }}></Animated.View>
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
      <OuterBox theme={{ mode: modeTheme[mode] }}>
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
