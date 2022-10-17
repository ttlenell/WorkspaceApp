import React from "react";

// packages
import { NavigationContainer } from "@react-navigation/native";

// stacks
import BottomTabNavigation from "./app/stacks/BottomTabStack";
import AppStack from "./app/stacks/AppStack/";

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigation /> */}
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
