import { Text, View, StyleSheet, useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface CategoryItem {
  title: string;
  icon: string;
}

interface CategoriesBoxProps {
  item: CategoryItem;
}

export default function CategoriesBox({ item }: CategoriesBoxProps) {
  const colors = useColorScheme();
  const backgroundColor = colors === "dark" ? "#232627" : "#E0E0E5";
  const textColor = colors === "dark" ? "#FFFFFF" : "#141718";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.icon}>
        <Icon name={item.icon} size={20} color={textColor} />
      </Text>
      <Text style={[styles.text, { color: textColor }]}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    paddingHorizontal: 12.5,
    paddingVertical: 12.5,
    borderRadius: 19.6,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});
