import { withLayoutContext } from "expo-router"
import { useState, useContext, useRef, useEffect } from "react"
import { useNavigation, DrawerActions } from "@react-navigation/native"
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer"
import { ActivityIndicator, ScrollView } from "react-native"
import { VStack, NativeBaseProvider } from "native-base"
import { modeTheme, themes } from "../../constants/Themes"
import { ThemeContext } from "../../constants/ThemeContext"
import styled from "styled-components/native"
import DrawerTopNav from "../../components/home/DrawerTopNav"
import DrawerQickNav from "../../components/home/DrawerQuickNav"

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
}

const DrawerViewContainer = styled(VStack)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }: { theme: ThemeProps }) =>
    theme.theme.drawerColor};
`
const DrawerNavContainer = styled(ScrollView)`
  flex: 1;
`

const DrawerNavigator = createDrawerNavigator().Navigator

const Drawer = withLayoutContext(DrawerNavigator)

function CustomDrawerContent(props: any) {
  const navigation = useNavigation()
  const { mode, setMode, theme, setTheme } = useContext(ThemeContext)
  return (
    <NativeBaseProvider>
      <DrawerContentScrollView
        {...props}
        style={{
          backgroundColor: "#228b22",
        }}
      >
        <DrawerViewContainer theme={{ theme: themes[theme] }}>
          <DrawerNavContainer>
            <DrawerTopNav
              handlecloseDrawer={() =>
                navigation.dispatch(DrawerActions.openDrawer())
              }
            />
            <DrawerQickNav />
          </DrawerNavContainer>
        </DrawerViewContainer>
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
    </NativeBaseProvider>
  )
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 300,
        },
      }}
    >
      <Drawer.Screen name="(main)" options={{ headerShown: false }} />
    </Drawer>
  )
}
