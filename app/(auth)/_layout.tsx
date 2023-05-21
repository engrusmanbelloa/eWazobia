import { FontAwesome5 } from "@expo/vector-icons"
import { Link, Tabs } from "expo-router"
import { Pressable, useColorScheme } from "react-native"

import Colors from "../../constants/Colors"

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
interface icon {
  name: React.ComponentProps<typeof FontAwesome5>["name"]
  color: string
}

function TabBarIcon(props: icon) {
  return <FontAwesome5 size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function AuthTabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="unlock-alt" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color }) => <TabBarIcon name="keycdn" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pay"
        options={{
          title: "Pay",
          tabBarIcon: ({ color }) => <TabBarIcon name="circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="headphones-alt" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="tools" color={color} />,
        }}
      />
    </Tabs>
  )
}
