import { StyleSheet } from "react-native"
import { Text, View } from "../../components/Themed"

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
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
