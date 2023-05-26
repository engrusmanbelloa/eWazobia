import { StyleSheet } from "react-native"

import EditScreenInfo from "../../components/EditScreenInfo"
import { Text, View } from "../../components/Themed"
import { AuthStore } from "../../store"
import { Stack, useRouter } from "expo-router"

export default function Register() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: "Create Account", headerLeft: () => <></> }}
      />
      <Text style={styles.title}>Register</Text>
      <Text
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = false
          })
          router.back()
        }}
      >
        CANCEL
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
})
