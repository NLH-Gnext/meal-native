import { Text, View } from "react-native";

const MealItem = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
