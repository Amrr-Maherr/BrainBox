import { Text, View } from "@/components/Themed";
import { TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import { useState } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const ColorScheme = useColorScheme();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <View style={Styles.container} lightColor="#F7F8FA" darkColor="#141718">
        <View lightColor="#F7F8FA" darkColor="#141718">
          <Text style={Styles.title}>Reset Your Password</Text>
        </View>
        <View style={Styles.input_container}>
          <View style={Styles.input_wrapper} lightColor="#fff" darkColor="#232627">
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#888"
              style={Styles.icon}
            />
            <TextInput
              style={Styles.input_with_icon}
              placeholder="New Password"
              secureTextEntry={!showNewPassword}
              placeholderTextColor={`${
                ColorScheme === "dark" ? "#C2C3CB" : "#ACADB9"
              }`}
            />
            <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
              <Ionicons
                name={showNewPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#888"
                style={Styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.input_wrapper} lightColor="#fff" darkColor="#232627">
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#888"
              style={Styles.icon}
            />
            <TextInput
              style={Styles.input_with_icon}
              placeholder="Confirm New Password"
              secureTextEntry={!showConfirmPassword}
              placeholderTextColor={`${
                ColorScheme === "dark" ? "#C2C3CB" : "#ACADB9"
              }`}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons
                name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#888"
                style={Styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.auth_Buttons_warper}>
          <TouchableOpacity style={Styles.auth_buttons}>
            <Text style={Styles.auth_button_text}>Reset Password</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.success_container}>
          <Text style={Styles.success_text}>
            Your password has been successfully reset!
          </Text>
        </View>
        <View style={Styles.back_link_container}>
          <TouchableOpacity onPress={() => router.replace("/Login")}>
            <Text style={Styles.back_link_text}>Back to <Text style={Styles.back_link_bold}>Log in</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 57,
    fontWeight: "400",
    lineHeight: 64,
    marginTop: 29.65,
    marginBottom: 50,
    textAlign: "center",
  },
  input_container: {
    width: "100%",
    marginBottom: 25.48,
  },
  input_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: 65.52,
    borderRadius: 12.84,
    marginBottom: 22.91,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  input_with_icon: {
    flex: 1,
    fontSize: 16,
  },
  auth_buttons: {
    width: "100%",
    height: 65.52,
    borderRadius: 14,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  auth_button_text: {
    fontSize: 17.18,
    fontWeight: "bold",
    // color: "#fff",
  },
  auth_Buttons_warper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 42.36,
  },
  success_container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  },
  success_text: {
    fontSize: 16,
    // color: "#4CAF50",
    textAlign: "center",
    fontWeight: "bold",
  },
  back_link_container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  back_link_text: {
    fontSize: 16,
    // color: "#ACADB9",
    textAlign: "center",
  },
  back_link_bold: {
    fontWeight: "bold",
    // color: "#000",
  },
});
