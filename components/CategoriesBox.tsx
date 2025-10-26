import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface CategoryItem {
  title: string;
  icon: string;
}

interface CategoriesBoxProps {
  item: CategoryItem;
}

export default function CategoriesBox({ item }: CategoriesBoxProps) {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} size={20} color="#fff" style={styles.icon} />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    backgroundColor: "#232627",
    paddingHorizontal: 12.5,
    paddingVertical: 12.5,
    borderRadius:19.6
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
