import { Stack } from "expo-router"

export default function BvnScreen() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "kyc", headerShown: false }}
      />
    </Stack>
  )
}
