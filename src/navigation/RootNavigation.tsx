import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStackNavigation from "./HomeStackNavigation";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
