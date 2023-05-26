import { StyleSheet } from "react-native"
import { AuthStore } from "../../store"
import { Text, View } from "../../components/Themed"
import { Stack, useRouter } from "expo-router"

export default function LoginScreen() {
  const handleLogin = () => {
    AuthStore.update((s) => {
      s.isLoggedIn = true
      router.replace("/(main)")
    })
  }

  const handleRegister = () => {
    AuthStore.update((s) => {
      s.isLoggedIn = false
    })
    router.push("/register")
  }
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Login" }} />
      <Text style={styles.title} onPress={handleLogin}>
        Login
      </Text>
      <Text onPress={handleRegister}>Create Account</Text>
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
