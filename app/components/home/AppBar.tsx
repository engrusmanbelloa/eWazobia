import { useState, useContext, useEffect, ChangeEvent } from "react"
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  View,
  StyleSheet,
} from "react-native"
import { NativeBaseProvider, Input, HStack, Avatar } from "native-base"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"

interface ThemeProps {
  mode: {
    backgroundColor: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
  }
}

const Container = styled(HStack)<{ theme: ThemeProps }>`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding: 5px;
`
export default function AppBar(props: any) {
  const { handleDrawer } = props
  const avater =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  return (
    <NativeBaseProvider>
      <Container>
        <TouchableOpacity onPress={handleDrawer}>
          <Avatar
            size={10}
            source={{
              uri: avater,
            }}
          >
            AJ
          </Avatar>
        </TouchableOpacity>
        <Input
          placeholder="Search"
          placeholderTextColor={"#fff"}
          fontSize={16}
          bg={"transparent"}
          variant="filled"
          width="65%"
          h={8}
          borderRadius="20"
          py="1"
          px="2"
          ml={2}
          mr={2}
          _focus={{
            borderColor: "#fff",
            fontSize: 16,
            color: "#fff",
          }}
          InputLeftElement={
            <Ionicons name="ios-search" color={"#fff"} size={25} />
          }
          InputRightElement={
            <Ionicons name="mic-outline" color={"#fff"} size={25} />
          }
        />
        <Ionicons name="cart-outline" color={"#fff"} size={35} />
        <Ionicons name="notifications-outline" color={"#fff"} size={35} />
      </Container>
    </NativeBaseProvider>
  )
}
