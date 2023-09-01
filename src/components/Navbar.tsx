import { Text, SafeAreaView } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <SafeAreaView
      style={{
        height: 70,
        width: "100%",
        backgroundColor: "#B64B39",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, color: "white", paddingTop: 10 }}>
        Statistics Calculator
      </Text>
    </SafeAreaView>
  );
};

export default Navbar;
