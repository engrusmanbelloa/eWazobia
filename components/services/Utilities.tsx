import { useState, useContext, useRef, useEffect } from "react"
import { TouchableOpacity, StatusBar, FlatList, Pressable } from "react-native"
import { Box, Text, Stack, HStack } from "native-base"
import styled from "styled-components/native"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeContext } from "../../constants/ThemeContext"
import { UtilitiesProps, ServiceData, IconName } from "../../types/servicesType"
import { ThemeProps } from "../../types/styleTypes"

const Container = styled(Stack)<{ theme: ThemeProps }>`
  flex: 1;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.primaryColor};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-top: 15px;
`
const Title = styled(Text)<{ theme: ThemeProps }>`
  font-size: 20px;
  font-weight: 400;
  left: 10px;
  margin-bottom: 5px;
  color: ${({ theme }: { theme: ThemeProps }) => theme.theme.textColor};
`
const ServicesContainer = styled(HStack)<{ theme: ThemeProps }>`
  flex: 1;
  margin: 5px;
  background-color: transparent;
  justify-content: center;
  border: 1px solid;
  border-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.mode.backgroundColor};
  border-radius: 5px;
  padding: 5px 0;
`
export default function Utilities({ servicesData }: UtilitiesProps) {
  const { mode, theme } = useContext(ThemeContext)

  const titleToIcon: Record<string, IconName> = {
    "Airtime Recharge": "ios-call-outline",
    "Data Purchase": "ios-wifi-outline",
    Utility: "cog-outline",
    "Pay Remita": "ios-send-outline",
    "TV Subscriptions": "ios-tv-outline",
    "Book Flights": "ios-airplane-outline",
    Transactions: "ios-book-outline",
    "My Flights": "ios-book-outline",
    "My Recharges": "ios-book-outline",
  }

  const renderItem = ({ item }: { item: ServiceData }) => {
    const color = themes[theme].textColor
    const iconName = titleToIcon[item.title]

    return (
      <ServicesContainer>
        <Link
          href={`/service/${item.id}`}
          // href={{
          //   pathname: "service/[id]",
          //   params: { id: item.id },
          // }}
          asChild
        >
          <TouchableOpacity
          // onPress={() => {
          //   console.log("Pressed item id", item.id)
          // }}
          >
            <Box justifyContent={"center"} alignItems={"center"}>
              <Ionicons name={iconName} size={24} color={color} />
              <Text style={{ color }}>{item.title}</Text>
            </Box>
          </TouchableOpacity>
        </Link>
      </ServicesContainer>
    )
  }
  return (
    <Container theme={{ theme: themes[theme] }}>
      <Title theme={{ theme: themes[theme] }}>Services</Title>
      <FlatList
        data={servicesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={3}
      />
    </Container>
  )
}
