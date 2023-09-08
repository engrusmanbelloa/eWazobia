import { useState, useContext, useEffect, useRef } from "react"
import { useRouter, Link, Stack } from "expo-router"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
}

export default function PayLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Pay", headerShown: false }}
        />
      </Stack>
    </>
  )
}
