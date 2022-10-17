import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

import LoginScreen from "../../screens/LoginScreen/";

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
