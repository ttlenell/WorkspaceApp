import ContentNavigator from "../../containers/ContentNavigator";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContentNavigator />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
