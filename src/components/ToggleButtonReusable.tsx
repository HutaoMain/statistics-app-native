import { View, Text } from "react-native";
import React from "react";
import { ToggleButton } from "react-native-paper";

interface ToggleButtonInterface {
  icon: string;
  value: string;
  status: "checked" | "unchecked";
  onPressButtonToggle: () => void;
}

const ToggleButtonReusable = ({
  icon,
  value,
  status,
  onPressButtonToggle,
}: ToggleButtonInterface) => {
  return (
    <View>
      <ToggleButton
        icon={status === "checked" ? "check-circle" : "check-circle-outline"}
        value={status === "checked" ? "check-circle" : "check-circle-outline"}
        status={status}
        onPress={onPressButtonToggle}
      />
    </View>
  );
};

export default ToggleButtonReusable;
