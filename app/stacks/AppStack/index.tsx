import React, { useState, useContext } from "react";

// context
import { UserContext } from "../../context/UserContext";

// screens
import AuthStack from "../AuthStack";
import BottomTabNavigator from "../BottomTabStack";

const AppStack = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  //   if (isLoading) {
  //     return <LoadingScreen setIsLoading={setIsLoading} />;
  //   }

  if (!user) {
    return <AuthStack />;
  } else {
    return <BottomTabNavigator />;
  }
};

export default AppStack;
