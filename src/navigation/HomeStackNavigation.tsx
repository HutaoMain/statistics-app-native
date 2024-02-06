import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import History from "../screens/History";
import Home from "../screens/Home";
import { HomeNavigationStackProps } from "../Types";

const HomeStackNavigation = () => {
  const HomeStack = createNativeStackNavigator<HomeNavigationStackProps>();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="History" component={History} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
