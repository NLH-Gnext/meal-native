import { Text } from "react-native";

function MealDetail({ route }) {
  const mealId = route.params.mealId;

  return <Text>{mealId}</Text>;
}
export default MealDetail;
