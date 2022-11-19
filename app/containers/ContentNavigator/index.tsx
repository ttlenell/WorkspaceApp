import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const mockData = [
  { title: "hej", id: 0, icon: "hej" },
  { title: "hej", id: 0, icon: "hej" },
  { title: "hej", id: 0, icon: "hej" },
  { title: "hej", id: 0, icon: "hej" },
];

const ContentNavigator = () => {
  return (
    <View style={styles.container}>
      <Text>ContentNavigator</Text>
      <FlatList data={mockData} />
    </View>
  );
};

export default ContentNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
