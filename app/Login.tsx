import { useState } from "react";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedButton } from "@/components/themed-button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig"
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (userCredential.user) {
        try {
         await AsyncStorage.setItem(
           "userData",
           JSON.stringify(userCredential.user)
         );
        } catch (error) {
          console.error(error);
       }
      }
      Alert.alert("Success", "Logged in successfully!");
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={50}
        keyboardShouldPersistTaps="handled"
      >
        <ThemedView
          lightColor="#fff"
          darkColor="#141718"
          style={styles.container}
        >
          <BackButton />

          <View style={styles.titleContainer}>
            <ThemedText style={styles.title}>Welcome Back</ThemedText>
            <Text style={styles.subtitle}>Login to your account</Text>
          </View>

          <View style={styles.inputsContainer}>
            {/* Email Input */}
            <Controller
              control={control}
              rules={{
                required: "Email is required",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputWrapper}>
                  <Ionicons name="mail-outline" size={22} color="#757474" />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Your Email"
                    keyboardType="email-address"
                    placeholderTextColor="#9A9A9A"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
              )}
              name="email"
            />
            {errors.email && (
              <Text style={{ color: "red", alignSelf: "flex-start" }}>
                {errors.email.message}
              </Text>
            )}

            {/* Password Input */}
            <Controller
              control={control}
              rules={{
                required: "Password is required",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={22}
                    color="#757474"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    placeholderTextColor="#9A9A9A"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-outline" : "eye-off-outline"}
                      size={22}
                      color="#757474"
                    />
                  </TouchableOpacity>
                </View>
              )}
              name="password"
            />
            {errors.password && (
              <Text style={{ color: "red", alignSelf: "flex-start" }}>
                {errors.password.message}
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => console.log("Forgot Password")}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <ThemedButton
            text="Login"
            style={styles.loginButton}
            lightColor="#E3E3E3"
            darkColor="#232627"
            textLight="#fff"
            textDark="#fff"
            onPress={handleSubmit(onSubmit)}
          />

          <View style={styles.registerContainer}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/Register")}>
              <Text style={styles.registerLink}>Sign Up</Text>
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
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: {
    paddingTop: 45,
    paddingBottom: 60,
    paddingHorizontal: 35,
    flex: 1,
  },
  titleContainer: { marginTop: 73.81 },
  title: {
    fontSize: 38,
    fontWeight: "600",
    color: "#fff",
  },
  subtitle: {
    color: "#9A9A9A",
    fontSize: 16,
    marginTop: 5,
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
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#9A9A9A",
    fontSize: 15,
  },
  loginButton: {
    marginTop: 40,
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: "center",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  noAccountText: {
    color: "#9A9A9A",
    fontSize: 15,
  },
  registerLink: {
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
