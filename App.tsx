import React, { useContext } from "react";

// packages
import { NavigationContainer } from "@react-navigation/native";

// context
import { UserProvider } from "./app/context/UserContext";

// stacks
import BottomTabNavigation from "./app/stacks/BottomTabStack";
import AppStack from "./app/stacks/AppStack/";

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        {/* <BottomTabNavigation /> */}
        <AppStack />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
