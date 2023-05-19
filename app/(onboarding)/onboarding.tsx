import { StyleSheet } from "react-native"

import { Text, View } from "../../components/Themed"

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>onboarding</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
})
