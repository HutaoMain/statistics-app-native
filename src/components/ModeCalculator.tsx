import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface ModeCalculatorProps {
  data: number[];
}

const ModeCalculator = ({ data }: ModeCalculatorProps) => {
  const numFrequency: Record<number, number> = {};
  data.forEach((num) => {
    numFrequency[num] = (numFrequency[num] || 0) + 1;
  });

  let modes: number[] = [];
  let maxFrequency = 0;

  for (const num in numFrequency) {
    if (numFrequency[num] > maxFrequency) {
      modes = [parseInt(num, 10)];
      maxFrequency = numFrequency[num];
    } else if (numFrequency[num] === maxFrequency) {
      modes.push(parseInt(num, 10));
    }
  }

  return (
    <View>
      <Text style={styles.resultContainer}>
        Mode:{" "}
        {isNaN(Number(modes.join(", ")))
          ? "Please enter the data in Input box to compute mode."
          : modes.join(", ")}
      </Text>
    </View>
  );
};

export default ModeCalculator;

const styles = StyleSheet.create({
  resultContainer: {
    width: "70%",
  },
});
