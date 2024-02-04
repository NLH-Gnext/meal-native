import { View, Text, StyleSheet } from "react-native";

const MealDetail = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailedItem}>{duration}m</Text>
      <Text style={styles.detailedItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailedItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};
export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailedItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
