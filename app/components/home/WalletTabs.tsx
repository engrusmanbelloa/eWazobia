import * as React from "react"
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native"
import { TabView, SceneMap } from "react-native-tab-view"
import { useState } from "react"
import { NativeBaseProvider, Box, Text, Center } from "native-base"
import Constants from "expo-constants"

const FirstRoute = () => (
  <Center flex={1} my="4">
    This is Tab 1
  </Center>
)

const SecondRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
)

const ThirdRoute = () => (
  <Center flex={1} my="4">
    This is Tab 3
  </Center>
)

const FourthRoute = () => (
  <Center flex={1} my="4">
    This is Tab 4{" "}
  </Center>
)

const initialLayout = {
  width: Dimensions.get("window").width,
}
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
})

function Example() {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {
      key: "first",
      title: "Tab 1",
    },
    {
      key: "second",
      title: "Tab 2",
    },
    {
      key: "third",
      title: "Tab 3",
    },
    {
      key: "fourth",
      title: "Tab 4",
    },
  ])

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (x: any, i: number) => i
    )
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5
            ),
          })
          return (
            <Box
              borderBottomWidth="3"
              borderColor={"#765"}
              flex={1}
              alignItems="center"
              p="3"
            >
              <Pressable
                onPress={() => {
                  console.log(i)
                  setIndex(i)
                }}
              >
                <Animated.Text>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          )
        })}
      </Box>
    )
  }

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
