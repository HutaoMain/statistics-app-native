import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Navbar = ({
  toggleOpenClose: toggleClose,
}: {
  toggleOpenClose: () => void;
}) => {
  return (
    <SafeAreaView
      style={{
        height: 100,
        width: "100%",
        backgroundColor: "#B64B39",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity style={{ paddingTop: 10 }} onPress={toggleClose}>
        <AntDesign
          name="menuunfold"
          size={24}
          color="#ffffff"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: "white", paddingTop: 10 }}>
        Statistics Calculator
      </Text>
      <View
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
            objectFit: "cover",
          }}
          source={require("../../assets/logo.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
