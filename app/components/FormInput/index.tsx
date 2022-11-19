import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const FormInput = (props) => {
  return (
    <View style={{ width: 300, padding: 10 }}>
      <TextInput style={styles.inputStyle} {...props} />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputStyle: {
    padding: 14,
    borderRadius: 7,
    fontSize: 16,
    textAlign: "left",
    backgroundColor: "#FFFFFF",
    width: "90%",
  },
});
