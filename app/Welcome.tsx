import { ThemedButton } from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { View, StyleSheet, Image, Text, useColorScheme } from "react-native";

export default function Welcome() {
  const ColorScheme = useColorScheme();
    const router = useRouter();
  const logo:object =
    ColorScheme === "dark"
      ? require("../assets/images/Logoo.png")
      : require("../assets/images/Logo.png");
  return (
    <ThemedView
      lightColor="#F7F8FA"
      darkColor="#141718"
      style={styles.container}
    >
      <Image style={styles.image} source={logo} />
      <View>
        <ThemedText lightColor="#141718" darkColor="#fff" style={styles.title}>
          Welcome to BrainBox
        </ThemedText>
      </View>

      <View style={styles.buttonsContainer}>
        <ThemedButton
          text="Log In"
          style={styles.button}
          lightColor="#141718"
          darkColor="#fff"
          textLight="#FFFFFF"
          onPress={() => router.push("/Register")}
        />
        <ThemedButton
          text="Sign Up"
          style={styles.button}
          lightColor="#E3E3E3"
          darkColor="#232627"
          textLight="#B1B1B1"
          textDark="#B1B1B1"
          onPress={() => console.log("sign up!")}
        />
      </View>

      <View style={styles.authContainer}>
        <ThemedText
          lightColor="#ACADB9"
          darkColor="#ACADB9"
          style={styles.authText}
        >
          Continue with Accounts
        </ThemedText>
        <View style={styles.socialButtonsContainer}>
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
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 154,
    height: 184.35,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 60,
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    gap: 22,
    marginTop: 63,
  },
  button: {
    width: "100%",
    height: 61,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 95.45,
  },
  authContainer: {
    marginTop: 42,
    width: "100%",
    gap: 20,
  },
  authText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  socialButtonsContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButton: {
    width: 165,
    height: 57,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D44638",
  },
  facebookButton: {
    width: 165,
    height: 57,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4267B2",
  },
});
