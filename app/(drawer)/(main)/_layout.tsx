import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import { Link, Tabs } from "expo-router"
import { ThemeContext } from "../../../constants/ThemeContext"
import { modeTheme, themes } from "../../../constants/Themes"
import { useContext } from "react"

interface icon {
  name: React.ComponentProps<typeof FontAwesome5>["name"]
  color: string
}
function TabBarIcon(props: icon) {
  const { name, color } = props
  const { mode, theme } = useContext(ThemeContext)

  const iconSize = name === "ios-scan-outline" ? 45 : 28
  const iconMarginBottom = name === "ios-scan-outline" ? -15 : -3
  const iconPadding = name === "ios-scan-outline" ? 5 : 0
  const iconBorderRadius = name === "ios-scan-outline" ? 10 : 0
  const iconBacground =
    name === "ios-scan-outline" ? themes[theme].linkColor : "#fff"
  const iconPosition = name === "ios-scan-outline" ? "absolute" : "relative"

  const iconStyle = {
    marginBottom: iconMarginBottom,
    padding: iconPadding,
    borderRadius: iconBorderRadius,
    backgroundColor: iconBacground,
    position: iconPosition,
    // color: name === "ios-scan-outline" ? "#fff" : themes[theme].primaryColor,
  }
  // return (
  // <Ionicons size={iconSize} style={iconStyle} name={name} color={color} />
  // )
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />
}

// export const unstable_settings = {
//   initialRouteName: "(home)",
// }

export default function MainTabLayout() {
  const { mode, theme } = useContext(ThemeContext)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: themes[theme].primaryColor,
        tabBarStyle: {
          backgroundColor: modeTheme[mode].backgroundColor,
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
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
        name="(loved)"
        options={{
          title: "Favorites",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="star-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(pay)"
        options={{
          title: "Pay",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-scan-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(wallets)"
        options={{
          title: "Wallets",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="wallet-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(services)"
        options={{
          title: "Services",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="menu-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
