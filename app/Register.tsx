import { useState } from "react";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedButton } from "@/components/themed-button";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <ThemedView
        lightColor="#fff"
        darkColor="#141718"
        style={styles.container}
      >
        <BackButton/>
        <View style={styles.titleContainer}>
          <ThemedText style={styles.title}>Create your Account</ThemedText>
        </View>

        <View style={styles.inputsContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={22} color="#757474" />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              keyboardType="default"
              placeholderTextColor="#9A9A9A"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={22} color="#757474" />
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              keyboardType="email-address"
              placeholderTextColor="#9A9A9A"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={22} color="#757474" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#9A9A9A"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={22}
                color="#757474"
              />
            </TouchableOpacity>
          </View>
        </View>

        <ThemedButton
          text="Sign Up"
          style={styles.signUpButton}
          lightColor="#E3E3E3"
          darkColor="#232627"
          textLight="#ffff"
          textDark="#ffff"
          onPress={() => console.log("Sign Up")}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.haveAccountText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => console.log("Go to Login")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialButtonsContainer}>
          <ThemedButton
            text="Google"
            style={styles.googleButton}
            lightColor="#141718"
            darkColor="#232627"
            onPress={() => console.log("Google")}
          />
          <ThemedButton
            text="Facebook"
            style={styles.facebookButton}
            lightColor="#E3E3E3"
            darkColor="#B1B1B1"
            onPress={() => console.log("Facebook")}
          />
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 60,
    paddingHorizontal: 35,
    flex: 1,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginTop: 73.81,
  },
  title: {
    fontSize: 38,
    fontWeight: "600",
  },
  inputsContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20.48,
    width: "100%",
    marginTop: 49.19,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232627",
    borderRadius: 12.84,
    height: 65.52,
    width: "100%",
    paddingHorizontal: 18,
    gap: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  signUpButton: {
    marginTop: 40,
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: "center",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  haveAccountText: {
    color: "#9A9A9A",
    fontSize: 15,
  },
  loginLink: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  socialButtonsContainer: {
    margin: "auto",
    gap: 15,
    flexDirection: "row",
    width: "100%",
  },
  googleButton: {
    flex: 1,
    height: 57,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D44638",
  },
  facebookButton: {
    flex: 1,
    height: 57,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4267B2",
  },
});
