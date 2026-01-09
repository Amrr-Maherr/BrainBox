import { Text, View } from "@/components/Themed";
import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { useColorScheme } from "@/components/useColorScheme";
import { useRouter } from "expo-router";
export default function Splash() {
    const Router = useRouter()
    useEffect(() => {
        const ScreenTimer = setTimeout(() => {
            Router.push("/SplashV2")
        }, 3000);
        return () => clearTimeout(ScreenTimer);
    },[])
  const colorScheme = useColorScheme();
  const ThemeLogo =
    colorScheme === "dark"
      ? require("../assets/images/LightLogo.png")
      : require("../assets/images/BlackLogo.png");
  return (
    <View style={Styles.Screen} lightColor="#fff" darkColor="#000000">
      <View style={Styles.Logo}>
        <Image style={Styles.Image} source={ThemeLogo} />
      </View>
      <View style={Styles.TextParent}>
        <Text style={Styles.Title} lightColor="#000000" darkColor="#fff">
          BrainBox
        </Text>
        <Text style={Styles.SubTitle} lightColor="#000000" darkColor="#757171">
          Version 1.0
        </Text>
      </View>
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
  Logo: {
    width: 119,
    height: 142.48,
  },
  Image: {
    width: "100%",
    height: "100%",
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
  },
});
