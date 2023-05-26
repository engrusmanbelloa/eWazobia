import { StyleSheet, Pressable, View } from "react-native"
import { NativeBaseProvider, Text, Box } from "native-base"
import { styled } from "styled-components"
import {
  Link,
  Stack,
  useNavigation,
  useRootNavigation,
  useRouter,
} from "expo-router"

export default function Welcome() {
  const navigation = useNavigation()
  const router = useRouter()

  const handleNextPress = () => {}

  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <Stack.Screen options={{ title: "Welcome" }} />
        <Text>Welcome to eWazobia</Text>
        <Link href="/onboarding" asChild>
          <Pressable>
            <Text>next</Text>
          </Pressable>
        </Link>
      </Box>
    </NativeBaseProvider>
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
