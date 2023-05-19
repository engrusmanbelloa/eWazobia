import { StyleSheet } from "react-native"

import { Text, View } from "../../components/Themed"

export default function Oneboarding() {
  return (
    <View style={styles.container}>
      <Text>Welcome to eWazobia</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#228B22",
  },
})
