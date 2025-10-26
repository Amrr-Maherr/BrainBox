import { FlatList, Text, View, useColorScheme } from "react-native";
import TypesBox from "./TypesBox";
import Icon from "react-native-vector-icons/MaterialIcons";
interface TypesItem {
  title: string;
  text: string;
  icon: string;
}

interface TypesListProps {
  Types: TypesItem[];
  TypesTitle: string;
}

export default function TypesList({ Types, TypesTitle }: TypesListProps) {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === "dark" ? "#FFFFFF" : "#141718";
  return (
    <>
      <View
        
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 22,
            fontWeight: "500",
          }}
        >
          {TypesTitle}
        </Text>
        <Icon name="chevron-right" size={30} style={{ color: textColor }} />
      </View>

      <FlatList
        data={Types}
        renderItem={({ item }) => <TypesBox item={item} />}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
        }}
      />
    </>
  );
}
