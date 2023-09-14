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
        Mode: {maxFrequency === 1 ? "No Mode" : modes.join(", ")}
      </Text>
      <Text style={styles.definition}>
        The Mode is the value(s) that appear most frequently in the dataset. To
        compute it, count the frequency of each value in the dataset, and
        identify the value(s) with the highest frequency.
      </Text>
    </View>
  );
};

export default ModeCalculator;

const styles = StyleSheet.create({
  resultContainer: {
    width: "70%",
  },
  definition: {
    width: "70%",
    marginTop: 10,
    fontStyle: "italic",
    color: "gray",
  },
});
