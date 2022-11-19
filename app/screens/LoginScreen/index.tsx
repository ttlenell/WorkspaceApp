import React, { FC, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";

// components
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Spinner from "../../components/Spinner";

// context
import { UserContext } from "../../context/UserContext";

// assets
import Logo from "../../assets/appicon-512x512.png";

import { ISubmit } from "./types";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  // log in function
  const Submit = async () => {
    console.log(email, password);
    setLoading(true);
    try {
      setUser(email);
    } catch (error) {
      Alert.alert("ERROR!", error.message);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={Logo}
          style={{ width: 100, height: 100, borderRadius: 20 }}
        />
      </View>

      <View>
        <FormInput onChangeText={setEmail} placeholder={"email"} />
        <FormInput onChangeText={setPassword} placeholder={"password"} />
      </View>
      {!loading ? (
        <FormButton
          type='filled'
          bordered={false}
          textSize={20}
          text={"Log in "}
          onPress={Submit}
        />
      ) : (
        <Spinner />
      )}
      <View style={styles.forgotPasswordView}>
        <Text>
          Forgot your password? Click{" "}
          <Text
            onPress={() => console.log("pressed Here")}
            style={{ color: "red" }}
          >
            here
          </Text>{" "}
          to recover your account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  forgotPasswordView: {
    width: "55%",
  },
});
