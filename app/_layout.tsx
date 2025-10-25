import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import IndexProvider from "@/Providers/IndexProvider";


export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const background = isDark ? "#141718" : "#fff";

  return (
    <IndexProvider>
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: background }}>
          <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: background,
                },
                animation: "fade",
              }}
              initialRouteName="index"
            >
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="index" />
              <Stack.Screen name="Welcome" />
              <Stack.Screen name="Register" />
              <Stack.Screen name="Login" />
            </Stack>
            <StatusBar style={isDark ? "light" : "dark"} />
          </ThemeProvider>
        </View>
      </SafeAreaProvider>
    </IndexProvider>
  );
}
