import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react";
// import { FavoriteContext } from "../store/context/favorite-context";

const FavoriteScreen = () => {
  // const favoriteMealsContext = useContext(FavoriteContext);
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsContext.ids.includes(meal.id)
  // );
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
