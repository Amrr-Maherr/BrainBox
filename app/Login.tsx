import { Button, Text, View } from "@/components/Themed";
import { Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import { useState } from "react";
export default function Login() {
  const router = useRouter();
  const ColorScheme = useColorScheme();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <View style={Styles.container} lightColor="#F7F8FA" darkColor="#141718">
        <View lightColor="#F7F8FA" darkColor="#141718">
          <Text style={Styles.title}>Login Your Account</Text>
        </View>
        <View
          style={Styles.input_container}
          lightColor="#F7F8FA"
          darkColor="#141718"
        >
          <View
            style={Styles.input_wrapper}
            lightColor="#fff"
            darkColor="#232627"
          >
            <Ionicons
              name="mail-outline"
              size={20}
              color="#888"
              style={Styles.icon}
            />
            <TextInput
              style={Styles.input_with_icon}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={`${
                ColorScheme === "dark" ? "#C2C3CB" : "#ACADB9"
              }`}
            />
          </View>
          <View
            style={Styles.input_wrapper}
            lightColor="#fff"
            darkColor="#232627"
          >
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#888"
              style={Styles.icon}
            />
            <TextInput
              style={Styles.input_with_icon}
              placeholder="Password"
              secureTextEntry={!showPassword}
              placeholderTextColor={`${
                ColorScheme === "dark" ? "#C2C3CB" : "#ACADB9"
              }`}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#888"
                style={Styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={Styles.forgot_password_container}
            lightColor="#F7F8FA"
            darkColor="#141718"
          >
            <TouchableOpacity onPress={() => router.push("/ForgetPassword")}>
              <Text style={Styles.forgot_password_text}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={Styles.auth_Buttons_warper}
          lightColor="#F7F8FA"
          darkColor="#141718"
        >
          <Button
            lightColor="#141718"
            darkColor="#F7F8FA"
            style={Styles.auth_buttons}
          >
            <Text
              lightColor="#F7F8FA"
              darkColor="#141718"
              style={Styles.auth_button_text}
            >
              Log in
            </Text>
          </Button>
          <View
            style={Styles.signup_link_container}
            lightColor="#F7F8FA"
            darkColor="#141718"
          >
            <TouchableOpacity onPress={() => router.push("/Register")}>
              <Text style={Styles.signup_link_text}>
                Create New Account?
                <Text style={Styles.signup_link_bold}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View lightColor="#F7F8FA" darkColor="#141718">
          <Text style={Styles.sub_title}>Or continue with</Text>
        </View>
        <View
          style={Styles.Social_Buttons_warper}
          lightColor="#F7F8FA"
          darkColor="#141718"
        >
          <TouchableOpacity style={Styles.google_button}>
            <Text style={Styles.google_button_text}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.facebook_button}>
            <Text style={Styles.social_button_text}>facebook</Text>
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
  image_container: {
    width: 154,
    height: 184.35,
  },
  image: {
    width: "100%",
    height: "100%",
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
  input: {
    width: "100%",
    height: 65.52,
    borderRadius: 12.84,
    paddingHorizontal: 20,
    marginBottom: 19,
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
    gap: 22.91,
    marginBottom: 42.36,
  },
  sub_title: {
    fontSize: 16,
    fontWeight: "medium",
    textAlign: "center",
    marginBottom: 23,
  },
  Social_Buttons_warper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 14,
  },
  google_button: {
    width: 165,
    paddingHorizontal: 36,
    paddingVertical: 18,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  facebook_button: {
    width: 165,
    paddingHorizontal: 36,
    paddingVertical: 18,
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4267B2",
    borderRadius: 10,
  },
  google_button_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  social_button_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  forgot_password_container: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgot_password_text: {
    fontSize: 14,
    textAlign: "right",
  },
  signup_link_container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  signup_link_text: {
    fontSize: 16,
    color: "#ACADB9",
    textAlign: "center",
  },
  signup_link_bold: {
    fontWeight: "bold",
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
});
