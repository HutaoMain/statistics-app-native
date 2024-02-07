import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import History from "../screens/History";
import Home from "../screens/Home";
import { HomeNavigationStackProps } from "../Types";
import { AppProvider } from "../AppContext";

const HomeStackNavigation = () => {
  const HomeStack = createNativeStackNavigator<HomeNavigationStackProps>();
  return (
    <AppProvider>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen name="History" component={History} />
      </HomeStack.Navigator>
    </AppProvider>
  );
};

export default HomeStackNavigation;
