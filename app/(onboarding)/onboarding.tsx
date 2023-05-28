import { StyleSheet } from "react-native"
// import { Text, View } from "../../components/Themed"
import { NativeBaseProvider, Text, Box } from "native-base"
import { Stack, useRouter } from "expo-router"

export default function Onboarding() {
  const router = useRouter()

  const handleBackt = () => {
    router.back()
  }
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Stack.Screen options={{ title: "Welcome" }} />
        <Text>Onboarding</Text>
        <Text onPress={handleBackt}>back</Text>
      </Box>
    </NativeBaseProvider>
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
