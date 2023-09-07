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
      <Text style={styles.definition}>
        The Median is the middle value in a sorted dataset. To compute it,
        first, arrange the data in ascending order. If there is an odd number of
        data points, the median is the middle value. If there is an even number
        of data points, the median is the average of the two middle values.
      </Text>
    </View>
  );
};

export default MedianCalculator;

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
