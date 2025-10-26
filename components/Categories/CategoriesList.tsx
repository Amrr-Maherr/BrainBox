import { FlatList } from "react-native";
import CategoriesBox from "../Categories/CategoriesBox";

interface CategoryItem {
  title: string;
  icon: string;
}

interface CategoriesListProps {
  Categories: CategoryItem[];
}

export default function CategoriesList({ Categories }: CategoriesListProps) {
  return (
    <>
      <FlatList
        data={Categories}
        renderItem={({ item }) => <CategoriesBox item={item} />}
        keyExtractor={(item) => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            gap:13
        }}
      />
    </>
  );
}
