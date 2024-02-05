import { StyleSheet, View, Text } from "react-native";

const List = ({ datas }) => {
  return (
    <View style={styles.listContainer}>
      {/* <Text style={styles.listItem}>{children}</Text> */}
      {datas.map((data) => (
        <View key={data} style={styles.listItem}>
          <Text style={styles.itemText}>{data}</Text>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    // margin : 3,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
