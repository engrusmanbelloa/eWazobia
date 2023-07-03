import { useState, useContext, useEffect, ChangeEvent } from "react"
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  FlatList,
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
  Box,
  HStack,
  Text,
  Avatar,
  ScrollView,
  Image,
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
import { transactions, shops } from "../../../constants/data"

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
  height: 70%;
  width: 100%;
`

const TabsBar = styled.View<{ active: boolean; theme: ThemeProps }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  width: 80%;
  margin: 0 auto;
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
  border-radius: 15px;
  align-items: center;
  top: 5px;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
`
const TxContainer = styled(HStack)<{ theme: ThemeProps }>`
  height: 50px;
  align-items: center;
  width: 98%;
  justify-content: space-between;
  border: 1px solid #fff;
  border-radius: 50px;
  margin: 5px;
`
const NameStack = styled(VStack)<{ theme: ThemeProps }>`
  left: -15px;
`
const NameTxt = styled(Text)<{ theme: ThemeProps }>`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`
const TimeStack = styled(VStack)<{ theme: ThemeProps }>`
  right: 20px;
`
const TransactionTxt = styled(Text)<{ theme: ThemeProps }>`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`
const Amount = styled(Text)<{ theme: ThemeProps }>`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`
const ShopStack = styled(HStack)<{ theme: ThemeProps }>`
  align-items: center;
  width: 47%;
  border: 1px solid #fff;
  margin: 6px;
  border-radius: 15px;
`

export default function NearByShops() {
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  const [index, setIndex] = useState(0)
  const [routes] = useState<RouteProps[]>([
    { key: "shops", title: "Nearby Shops" },
    { key: "tx", title: "Transactions" },
  ])

  const handleIndexChange = (currentIndex: number) => {
    setIndex(currentIndex)
  }
  // ShopList to be rendered
  const renderItem = ({ item }: any) => (
    <ShopStack>
      <Image
        source={{
          uri: item.image,
        }}
        alt="Alternate Text"
        size="sm"
        borderRadius={15}
      />
      <VStack ml={2}>
        <Text>
          {item.name.length > 17 ? item.name.substring(0, 17) : item.name}
        </Text>
        <HStack
          w={"100px"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Text>{item.away}</Text>
          <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
        </HStack>
        <HStack w={"100px"} justifyContent={"space-around"}>
          <Text>Order</Text>
          <Text>Visit</Text>
        </HStack>
      </VStack>
    </ShopStack>
  )

  const ShopsRoute = () => (
    <InnerBox theme={{ theme: themes[theme] }}>
      <FlatList
        data={shops}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </InnerBox>
  )

  const TxRoute = () => (
    <InnerBox theme={{ theme: themes[theme] }}>
      {transactions.map((transaction) => (
        <TxContainer key={transaction.id}>
          <Avatar
            size={12}
            source={{
              uri: transaction.image,
            }}
          >
            AJ
          </Avatar>
          <NameStack>
            <NameTxt>{transaction.name}</NameTxt>
            <NameTxt>{transaction.type}</NameTxt>
          </NameStack>
          <TimeStack>
            <HStack>
              <MaterialCommunityIcons
                name="currency-ngn"
                size={15}
                color="#fff"
              />
              <Amount>{transaction.amount}</Amount>
            </HStack>
            <TransactionTxt>{transaction.timeStamp}</TransactionTxt>
          </TimeStack>
        </TxContainer>
      ))}
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
              <Animated.Text style={{ opacity, color: "#fff", fontSize: 16 }}>
                {route.title}
              </Animated.Text>
            </TabItem>
          )
        })}
      </TabsBar>
    )
  }

  const renderScene = SceneMap({
    shops: ShopsRoute,
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
