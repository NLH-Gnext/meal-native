import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = () => {
  //   function renderCategoryItem(itemData) {
  //     return (
  //       <CategoryGridTile
  //         title={itemData.item.title}
  //         color={itemData.item.color}
  //       />
  //     );
  //   }

  // const renderCategoryItem = (itemData) =>  <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>

  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {},
});
