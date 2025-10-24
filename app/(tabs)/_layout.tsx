import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const background = isDark ? "#141718" : "#fff";
  const iconsColor = isDark ? "#fff" : "#141416";

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_300Light,
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarActiveTintColor: iconsColor,
        tabBarInactiveTintColor: "#9E9E9E",
        tabBarStyle: {
          backgroundColor: background,
          borderTopWidth: 0,
          height: 55,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={26}
                color={color}
              />
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    bottom: -13,
                    width: 7.21,
                    height: 7.21,
                    borderRadius: 3,
                    backgroundColor: color,
                  }}
                />
              )}
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={26}
                color={color}
              />
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    bottom: -13,
                    width: 7.21,
                    height: 7.21,
                    borderRadius: 3,
                    backgroundColor: color,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "notifications" : "notifications-outline"}
                size={26}
                color={color}
              />
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    bottom: -13,
                    width: 7.21,
                    height: 7.21,
                    borderRadius: 3,
                    backgroundColor: color,
                  }}
                />
              )}
            </View>
          ),
          tabBarBadge: "5",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={26}
                color={color}
              />
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    bottom: -13,
                    width: 7.21,
                    height: 7.21,
                    borderRadius: 3,
                    backgroundColor: color,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
