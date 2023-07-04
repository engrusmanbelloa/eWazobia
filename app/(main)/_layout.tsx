import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import { Link, Tabs } from "expo-router"
import { Pressable, useColorScheme } from "react-native"
import { ThemeContext } from "../../constants/ThemeContext"
import { modeTheme, themes } from "../../constants/Themes"
import { useContext } from "react"

interface icon {
  name: React.ComponentProps<typeof FontAwesome5>["name"]
  color: string
}
function TabBarIcon(props: icon) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function MainTabLayout() {
  const { mode, theme } = useContext(ThemeContext)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: themes[theme].primaryColor,
        tabBarStyle: {
          backgroundColor: modeTheme[mode].backgroundColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome5
          //           name="info-circle"
          //           size={25}
          //           color={themes[theme].primaryColor}
          //           style={{
          //             marginRight: 15,
          //             opacity: pressed ? 0.5 : 1,
          //           }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="star-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pay"
        options={{
          title: "Pay",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="scan-circle-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallets"
        options={{
          title: "Wallets",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="wallet-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="menu-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
