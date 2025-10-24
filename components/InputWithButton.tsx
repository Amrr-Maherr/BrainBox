import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function InputWithSendIcon() {
  const color = useColorScheme();
  const bgColor = color === "dark" ? "#676767" : "#E1E1E1";

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <TextInput placeholder="Type something..." style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Icon name="send" size={24} color="#222225ff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 48,
    paddingHorizontal: 13,
    borderRadius: 7,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
