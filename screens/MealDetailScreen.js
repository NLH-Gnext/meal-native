import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{mealId}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
