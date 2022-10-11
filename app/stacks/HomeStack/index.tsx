import React from "react";

// packages
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "../../screens/HomeScreen";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = ({ route }) => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={`${route.name}-screen`} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
