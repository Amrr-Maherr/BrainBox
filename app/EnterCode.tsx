import { Text, View } from "@/components/Themed";
import { TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import { useState } from "react";

export default function EnterCode() {
  const router = useRouter();
  const ColorScheme = useColorScheme();
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto focus next input
    if (text && index < 5) {
      const nextInput = `input-${index + 1}`;
      // Focus logic would be handled with refs in real implementation
    }
  };

  return (
    <>
      <View style={Styles.container} lightColor="#F7F8FA" darkColor="#141718">
        <View lightColor="#F7F8FA" darkColor="#141718">
          <Text style={Styles.title}>Enter Verification Code</Text>
        </View>
        <View style={Styles.subtitle_container}>
          <Text style={Styles.subtitle}>
            We have sent a verification code to your email
          </Text>
        </View>
        <View style={Styles.code_container}>
          {code.map((digit, index) => (
            <View key={index} style={Styles.code_input_wrapper} lightColor="#fff" darkColor="#232627">
              <TextInput
                style={Styles.code_input}
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                placeholderTextColor={`${
                  ColorScheme === "dark" ? "#C2C3CB" : "#ACADB9"
                }`}
              />
            </View>
          ))}
        </View>
        <View style={Styles.auth_Buttons_warper}>
          <TouchableOpacity style={Styles.auth_buttons} onPress={() => router.push('/ResetPassword')}>
            <Text style={Styles.auth_button_text}>Verify Code</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.resend_container}>
          <TouchableOpacity>
            <Text style={Styles.resend_text}>Didn't receive code? <Text style={Styles.resend_link}>Resend</Text></Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.back_link_container}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={Styles.back_link_text}>Back to <Text style={Styles.back_link_bold}>Forget Password</Text></Text>
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
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle_container: {
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    // color: "#ACADB9",
  },
  code_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  code_input_wrapper: {
    width: 50,
    height: 60,
    borderRadius: 10,
    // backgroundColor: "#f0f0f0",
    alignItems: 'center',
    justifyContent: 'center',
  },
  code_input: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    height: '100%',
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
    marginBottom: 20,
  },
  resend_container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  resend_text: {
    fontSize: 16,
    // color: "#ACADB9",
    textAlign: "center",
  },
  resend_link: {
    fontWeight: "bold",
    // color: "#000",
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
