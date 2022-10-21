import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";

// components
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

const LoginScreen: FC = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hej hej logun</Text>
      <FormInput onChangeText={setEmail} placeholder={"email"} />
      <FormInput onChangeText={setPassword} placeholder={"password"} />
      <Text>
        email: {email} password: {password}
      </Text>
      <FormButton />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
