import { Image } from "expo-image";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ✅ استيراد الأيقونات

export default function On_Boarding_1() {
  return (
    <View style={Styles.container}>
      {/* Skip Text */}
      <View style={Styles.skipWrapper}>
        <Text style={Styles.skipText}>Skip</Text>
      </View>

      <Image
        alt="On_Boarding_1"
        style={Styles.image}
        source={require("../assets/images/On_Boarding_1.png")}
      />

      <View style={Styles.textContainer}>
        <Text style={Styles.title}>Unlock the Power Of Future AI</Text>
        <Text style={Styles.text}>
          Chat with the smartest AI Future Experience power of AI with us
        </Text>
      </View>

      {/* Bottom Buttons */}
      <View style={Styles.buttonContainer}>
        <View style={Styles.buttonContent}>
          <Ionicons name="arrow-back" size={22} color="#23262F" />
        </View>

        <View style={Styles.divider} />

        <View style={Styles.buttonContent}>
          <Ionicons name="arrow-forward" size={22} color="#23262F" />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 23,
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 26,
    paddingTop: 41,
  },
  skipWrapper: {
    width: "100%",
    alignItems: "flex-end",
  },
  skipText: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    color: "#D7D7D7",
  },
  textContainer: {
    maxWidth: 316,
    marginHorizontal: "auto",
  },
  image: {
    width: "100%",
    height: 438.45,
    borderRadius: 33.05,
  },
  title: {
    fontSize: 33.9,
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    color: "#23262F",
  },
  text: {
    fontSize: 16.3,
    textAlign: "center",
    fontWeight: "300",
    fontFamily: "Poppins_300Light",
    color: "#8E9295",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: 154,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: "row",
    padding: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Poppins_300Light",
    color: "#23262F",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#E0E0E0",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
