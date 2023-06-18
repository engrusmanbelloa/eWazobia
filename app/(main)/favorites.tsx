import { StyleSheet, StatusBar } from "react-native"
import { Text, View } from "../../components/Themed"
import { ThemeContext } from "../../constants/ThemeContext"
import { useState, useContext, useEffect, ChangeEvent } from "react"

export default function TabTwoScreen() {
  const { mode, theme } = useContext(ThemeContext)
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={mode === "light" ? "dark-content" : "light-content"}
      />
      <Text style={styles.title}>Favorites</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#228b22",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
})
