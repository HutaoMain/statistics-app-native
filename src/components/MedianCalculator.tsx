import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface MedianCalculatorProps {
  data: number[];
}

const MedianCalculator = ({ data }: MedianCalculatorProps) => {
  const sortedData = data.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);
  const median =
    sortedData.length % 2 === 0
      ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
      : sortedData[middleIndex];

  return (
    <View>
      <Text style={styles.resultContainer}>
        Median:{" "}
        {Number.isNaN(median)
          ? "Please enter the data in Input box to compute median."
          : median}
      </Text>
    </View>
  );
};

export default MedianCalculator;

const styles = StyleSheet.create({
  resultContainer: {
    width: "70%",
  },
});
