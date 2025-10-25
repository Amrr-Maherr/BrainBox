import { useState } from "react";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedButton } from "@/components/themed-button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  useColorScheme,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";

export default function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      router.push("/Login");
    } catch (error: any) {
      Alert.alert("Error registering user:", error.message);
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
          lightColor="#F7F8FA"
          darkColor="#141718"
          style={styles.container}
        >
          <BackButton />

          <View style={styles.titleContainer}>
            <ThemedText
              lightColor="#141718"
              darkColor="#FFFFFF"
              style={styles.title}
            >
              Create your Account
            </ThemedText>
          </View>

          <View style={styles.inputsContainer}>
            {/* Full Name */}
            <Controller
              control={control}
              rules={{ required: "Full name is required" }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  style={[
                    styles.inputWrapper,
                    {
                      backgroundColor: isDark ? "#232627" : "#E9E9E9",
                    },
                  ]}
                >
                  <Ionicons name="person-outline" size={22} color="#757474" />
                  <TextInput
                    style={[
                      styles.input,
                      { color: isDark ? "#FFFFFF" : "#141718" },
                    ]}
                    placeholder="Full Name"
                    placeholderTextColor={isDark ? "#9A9A9A" : "#7C7C7C"}
                    keyboardType="default"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
              )}
              name="fullName"
            />
            {errors.fullName && (
              <ThemedText
                lightColor="red"
                darkColor="red"
                style={{ alignSelf: "flex-start" }}
              >
                {errors.fullName.message}
              </ThemedText>
            )}

            {/* Email */}
            <Controller
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  style={[
                    styles.inputWrapper,
                    {
                      backgroundColor: isDark ? "#232627" : "#E9E9E9",
                    },
                  ]}
                >
                  <Ionicons name="mail-outline" size={22} color="#757474" />
                  <TextInput
                    style={[
                      styles.input,
                      { color: isDark ? "#FFFFFF" : "#141718" },
                    ]}
                    placeholder="Enter Your Email"
                    placeholderTextColor={isDark ? "#9A9A9A" : "#7C7C7C"}
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                </View>
              )}
              name="email"
            />
            {errors.email && (
              <ThemedText
                lightColor="red"
                darkColor="red"
                style={{ alignSelf: "flex-start" }}
              >
                {errors.email.message}
              </ThemedText>
            )}

            {/* Password */}
            <Controller
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View
                  style={[
                    styles.inputWrapper,
                    {
                      backgroundColor: isDark ? "#232627" : "#E9E9E9",
                    },
                  ]}
                >
                  <Ionicons
                    name="lock-closed-outline"
                    size={22}
                    color="#757474"
                  />
                  <TextInput
                    style={[
                      styles.input,
                      { color: isDark ? "#FFFFFF" : "#141718" },
                    ]}
                    placeholder="Password"
                    placeholderTextColor={isDark ? "#9A9A9A" : "#7C7C7C"}
                    secureTextEntry={!showPassword}
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
              <ThemedText
                lightColor="red"
                darkColor="red"
                style={{ alignSelf: "flex-start" }}
              >
                {errors.password.message}
              </ThemedText>
            )}
          </View>

          {/* Submit */}
          <ThemedButton
            text="Sign Up"
            style={styles.signUpButton}
            lightColor="#E3E3E3"
            darkColor="#232627"
            textLight="#fff"
            textDark="#fff"
            onPress={handleSubmit(onSubmit)}
          />

          {/* Already have an account */}
          <View style={styles.loginContainer}>
            <ThemedText
              lightColor="#6B6B6B"
              darkColor="#B8B8B8"
              style={styles.haveAccountText}
            >
              Already have an account?
            </ThemedText>
            <TouchableOpacity onPress={() => router.push("/Login")}>
              <ThemedText
                lightColor="#007AFF"
                darkColor="#5DAEFF"
                style={styles.loginLink}
              >
                Login
              </ThemedText>
            </TouchableOpacity>
          </View>

          {/* Social Buttons */}
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
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingTop: 45,
    paddingBottom: 60,
    paddingHorizontal: 35,
    flex: 1,
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
    borderRadius: 12.84,
    height: 65.52,
    width: "100%",
    paddingHorizontal: 18,
    gap: 10,
  },
  input: {
    flex: 1,
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
    fontSize: 15,
  },
  loginLink: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 4,
  },
  socialButtonsContainer: {
    marginTop: 25,
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
