import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface RangeCalculatorProps {
  data: number[];
}

const RangeCalculator = ({ data }: RangeCalculatorProps) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;

  return (
    <View>
      <Text style={styles.resultContainer}>
        <Text style={{ fontWeight: "bold" }}>Range: </Text>
        {Number.isNaN(range)
          ? "Please enter the data in Input box to compute range."
          : range}
      </Text>
      <Text style={styles.definition}>
        The Range is the difference between the maximum and minimum values in
        the dataset. To compute it, find the largest and smallest values in the
        dataset and subtract the smallest from the largest.
      </Text>
    </View>
  );
};

export default RangeCalculator;

const styles = StyleSheet.create({
  resultContainer: {
    width: "100%",
    fontSize: 16,
  },
  definition: {
    width: "100%",
    marginTop: 10,
    fontStyle: "italic",
    color: "gray",
    fontSize: 15,
  },
});
