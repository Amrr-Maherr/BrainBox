import { FlatList } from "react-native";
import CategoriesBox from "../CategoriesBox";

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
        contentContainerStyle={{
            gap:13
        }}
      />
      {/* {Categories?.map((item, index) => (
        <CategoriesBox key={index} item={item} />
      ))} */}
    </>
  );
}
