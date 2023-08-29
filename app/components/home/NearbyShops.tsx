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
  padding-bottom: 20px;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
`
const TxContainer = styled(HStack)<{ theme: ThemeProps }>`
  height: 50px;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  border: 1px solid #fff;
  border-radius: 50px;
  margin: 5px;
`
const NameStack = styled(VStack)<{ theme: ThemeProps }>`
  right: 20px;
  width: 40%;
`
const NameTxt = styled(Text)<{ theme: ThemeProps }>`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`
const RecipientTx = styled(Text)<{ theme: ThemeProps }>`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`
const TimeStack = styled(VStack)<{ theme: ThemeProps }>`
  right: 20px;
`
const TransactionTxt = styled(Text)<{ theme: ThemeProps }>`
  font-size: 10px;
  font-weight: 600;
  color: #fff;
`
const Amount = styled(Text)<{ active: string; theme: ThemeProps }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ active }: { active: boolean; theme: ThemeProps }) =>
    active ? "#C21807" : "#fff"};
`
const ShopStack = styled(HStack)<{ theme: ThemeProps }>`
  align-items: center;
  width: 47%;
  border: 1px solid #fff;
  margin: 5px;
  border-radius: 15px;
`
const ShopTitle = styled(Text)<{ theme: ThemeProps }>`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
`
const ShopDetail = styled(Text)<{ theme: ThemeProps }>`
  font-size: 12px;
  font-weight: 300;
  color: #fff;
  margin-right: 15px;
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

  // Define the maximum number of items to render
  const limit = 10
  const limitedData = shops.slice(0, limit)

  // ShopList to be rendered
  const renderShopItem = ({ item }: any) => (
    <ShopStack>
      <Image
        source={{
          uri: item.image,
        }}
        alt="Alternate Text"
        size="sm"
        borderRadius={15}
      />
      <VStack ml={3}>
        <ShopTitle>
          {item.name.length > 15 ? item.name.substring(0, 15) : item.name}
        </ShopTitle>
        <HStack w={"100px"} alignItems={"center"}>
          <ShopDetail>{item.away}</ShopDetail>
          <MaterialCommunityIcons name="bike-fast" size={24} color="#fff" />
        </HStack>
        <HStack w={"100px"}>
          <ShopDetail>Order</ShopDetail>
          <ShopDetail>Visit</ShopDetail>
        </HStack>
      </VStack>
    </ShopStack>
  )

  // Transaction List to be rendered
  const renderTxItem = ({ item }: any) => (
    <TxContainer>
      <Avatar
        size={12}
        source={{
          uri: item.image,
        }}
      >
        AJ
      </Avatar>
      <NameStack>
        <NameTxt>{item.senderName}</NameTxt>
        {item.senderName === "Bello Usman A" ? (
          <RecipientTx>Sent</RecipientTx>
        ) : (
          <RecipientTx>Recieved</RecipientTx>
        )}
      </NameStack>
      <TimeStack>
        <HStack>
          <MaterialCommunityIcons
            name="currency-ngn"
            size={15}
            color={item.senderName === "Bello Usman A" ? "#C21807" : "#ffffff"}
          />
          <Amount active={item.senderName === "Bello Usman A"}>
            {item.amount}
          </Amount>
        </HStack>
        <TransactionTxt>{item.timeStamp}</TransactionTxt>
      </TimeStack>
    </TxContainer>
  )

  const ShopsRoute = () => (
    <InnerBox theme={{ theme: themes[theme] }}>
      <FlatList
        data={limitedData}
        numColumns={2}
        renderItem={renderShopItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </InnerBox>
  )

  const TxRoute = () => (
    <InnerBox theme={{ theme: themes[theme] }}>
      <FlatList
        data={transactions}
        numColumns={1}
        renderItem={renderTxItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
