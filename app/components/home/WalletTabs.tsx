import React, { useState } from "react"
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native"
import { TabView, SceneMap } from "react-native-tab-view"

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: "#ff4081" }]} />
)
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#673ab7" }]} />
)
const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: "#026ab7" }]} />
)

export default function WalletTabs() {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
  ])

  const handleIndexChange = (index: number) => setIndex(index)

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (x: any, i: number) => i
    )

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route: any, i: number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5
            ),
          })

          ;<TouchableOpacity style={styles.tabItem} onPress={() => setIndex(i)}>
            <Animated.Text style={{ opacity }}></Animated.Text>
          </TouchableOpacity>
        })}
      </View>
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

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    width: "200px",
    left: "25%",
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  tabItem: {
    alignItems: "center",
    width: "10px",
    height: "10px",
    backgroundColor: "#675438",
    margin: "2px",
    top: "0px",
  },
})
