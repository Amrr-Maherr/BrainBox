import { Text, View } from "@/components/Themed";
import { Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Register() {
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.image_container}>
          <Image
            style={Styles.image}
            source={require("../assets/images/LightLogo.png")}
          />
        </View>
        <View>
          <Text style={Styles.title}>Sign up to BrainBox</Text>
        </View>
        <View style={Styles.input_container}>
          <TextInput
            style={Styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={Styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            style={Styles.input}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>
        <View style={Styles.auth_Buttons_warper}>
          <TouchableOpacity style={Styles.auth_buttons}>
            <Text style={Styles.auth_button_text}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={Styles.sub_title}>Or continue with</Text>
        </View>
        <View style={Styles.Social_Buttons_warper}>
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
    marginBottom: 63,
    textAlign: "center",
  },
  input_container: {
    width: "100%",
    marginBottom: 42.36,
  },
  input: {
    width: "100%",
    height: 63.36,
    borderRadius: 95.45,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    marginBottom: 22.91,
    fontSize: 16,
  },
  auth_buttons: {
    width: "100%",
    height: 63.36,
    borderRadius: 95.45,
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
  sub_title: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#ACADB9",
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
});