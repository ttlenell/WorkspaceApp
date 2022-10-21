import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const index = () => {
  return (
    <TouchableOpacity style={styles.formButton}>
      <Text style={styles.formButtonText}>Log in</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  formButton: {
    marginHorizontal: "10%",
    backgroundColor: "#3B40B5",
    borderRadius: 6,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  formButtonText: {
    color: "#FFF",
  },
});
