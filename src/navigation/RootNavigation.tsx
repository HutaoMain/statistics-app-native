import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomTabNavigation from "./BottomTabNavigation";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
