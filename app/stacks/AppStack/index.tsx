import React, { useState } from "react";

// screens
import AuthStack from "../AuthStack";
import BottomTabNavigator from "../BottomTabStack";

const AppStack = () => {
  const [user, setUser] = useState();
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
