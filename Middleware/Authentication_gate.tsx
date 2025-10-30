import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Authentication_gate({ children }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("userData");
        if (token) {
          router.replace("/(tabs)");
        } else {
          router.replace("/On-Boarding-1");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
      }
    };

    checkAuth();
  }, [router]);

  return <View>{children}</View>;
}
