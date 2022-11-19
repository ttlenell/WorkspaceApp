import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Spinner = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size='large' />
    </View>
  );
};

export default Spinner;
