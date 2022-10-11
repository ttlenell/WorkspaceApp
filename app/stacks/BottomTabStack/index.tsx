import React from "react";

// packages
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// mockdata
import stacks from "../stacksJSON.json";
import HomeNavigator from "../HomeStack/";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='home'
      screenOptions={
        {
          //     headerLeft: HeaderLogo,
          //     headerRight: HeaderChromeCast,
          //     headerTitle: "",
          //     ...data.header.headerStyles,
        }
      }
    >
      {stacks.tabs.map(({ stack, icon, name }) => (
        <BottomTab.Screen
          options={() => ({
            tabBarLabel: name,
            tabBarIcon: ({ focused }) => {
              return <Ionicons name={icon} size={20} />;
            },
          })}
          name={stack}
          component={HomeNavigator}
          key={stack}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
