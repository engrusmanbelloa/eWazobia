import { StyleSheet } from "react-native"
import { NativeBaseProvider, Text, Box } from "native-base"
import { AuthStore } from "../../config/store"
import { Stack, useRouter } from "expo-router"

export default function Register() {
  const router = useRouter()
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Stack.Screen
          options={{ title: "Register", headerLeft: () => <></> }}
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
      </Box>
    </NativeBaseProvider>
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
