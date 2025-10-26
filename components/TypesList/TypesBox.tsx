import { useRouter } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface TypesItem {
  title: string;
  text: string;
  icon: string;
}

interface TypesBoxProps {
  item: TypesItem;
}

export default function TypesBox({ item }: TypesBoxProps) {
  const colors = useColorScheme();
  const backgroundColor = colors === "dark" ? "#232627" : "#E0E0E5";
  const textColor = colors === "dark" ? "#FFFFFF" : "#141718";

  const nextIconBackground = colors === "dark" ? "#A0A0A5" : "#D1D1D6";
  const nextIconColor = colors === "dark" ? "#FFFFFF" : "#141718";
  const Router = useRouter();
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Icon name={item.icon} size={28} color={textColor} style={styles.icon} />
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      <Text style={[styles.text, { color: textColor }]}>{item.text}</Text>

      <TouchableHighlight
        onPress={() => {
          Router.push("/Main");
        }}
        style={[
          styles.nextIconContainer,
          { backgroundColor: nextIconBackground },
        ]}
      >
        <Text>
          <Icon name="chevron-right" size={24} color={nextIconColor} />
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 129,
    marginVertical: 6,
    paddingHorizontal: 12.5,
    paddingVertical: 12.5,
    borderRadius: 19.6,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16.08,
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 10.18,
    textAlign: "center",
    marginBottom: 11.5,
  },
  nextIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 50,
    marginTop: 11.5,
  },
});
