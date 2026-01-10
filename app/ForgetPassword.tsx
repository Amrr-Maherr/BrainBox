import { Text, View } from "@/components/Themed";
import { Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

export default function ForgetPassword() {
  const router = useRouter();
  return (
    <>
      <View style={Styles.container}>
        {/* <View style={Styles.image_container}>
          <Image
            style={Styles.image}
            source={require("../assets/images/LightLogo.png")}
          />
        </View> */}
        <View>
          <Text style={Styles.title}>Reset Your Password</Text>
        </View>
        <View style={Styles.input_container}>
          <View style={Styles.input_wrapper}>
            <Ionicons name="mail-outline" size={20} color="#888" style={Styles.icon} />
            <TextInput
              style={Styles.input_with_icon}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={Styles.auth_Buttons_warper}>
          <TouchableOpacity style={Styles.auth_buttons}>
            <Text style={Styles.auth_button_text}>Send Reset Link</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.back_link_container}>
          <TouchableOpacity onPress={() => router.back()}>
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
    marginBottom: 63,
    textAlign: "center",
  },
  input_container: {
    width: "100%",
    marginBottom: 42.36,
  },
  input: {
    width: "100%",
    height: 65.52,
    borderRadius: 12.84,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    marginBottom: 22.91,
    fontSize: 16,
  },
  auth_buttons: {
    width: "100%",
    height: 65.52,
    borderRadius: 14,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  auth_button_text: {
    fontSize: 17.18,
    fontWeight: "bold",
    color: "#fff",
  },
  auth_Buttons_warper: {
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
    gap: 22.91,
    marginBottom: 42.36,
  },
  back_link_container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  back_link_text: {
    fontSize: 16,
    color: "#ACADB9",
    textAlign: "center",
  },
  back_link_bold: {
    fontWeight: "bold",
    color: "#000",
  },
  input_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    height: 65.52,
    borderRadius: 12.84,
    backgroundColor: "#f0f0f0",
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
