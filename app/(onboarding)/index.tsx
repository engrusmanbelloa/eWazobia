import { StyleSheet, Pressable, View } from "react-native"
import { NativeBaseProvider, Text, Box } from "native-base"
import { styled } from "styled-components"
import { Link, useNavigation, useRootNavigation, useRouter } from "expo-router"
import Onboarding from "./onboarding"

// import {} from "../../components/Themed"

export default function Welcome() {
  const navigation = useNavigation()
  const router = useRouter()

  const handleNextPress = () => {
    navigation.navigate()
  }

  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
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
