import { View, Text, StyleSheet } from "react-native";

const MealDetail = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailedItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailedItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailedItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
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
