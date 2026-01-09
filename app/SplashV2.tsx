import { Text, View } from "@/components/Themed";
import React from "react";
import { StyleSheet} from "react-native";
import { useColorScheme } from "@/components/useColorScheme";
export default function SplashV2() {
    const colorScheme = useColorScheme();
  return (
    <View style={Styles.Screen} lightColor="#fff" darkColor="#000000">
      <Text style={Styles.Title} lightColor="#000" darkColor="#FFFFFF">
        BrainBox
      </Text>
      <Text style={Styles.SubTitle} lightColor="#000" darkColor="#757171">
        Version 1.0
      </Text>
    </View>
  );
}
const Styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  TextParent: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 39,
  },
  Title: {
    fontSize: 35,
    fontWeight: "medium",
  },
  SubTitle: {
    fontSize: 14,
    position: "absolute",
    bottom: 39,
  },
});