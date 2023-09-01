import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface VarianceAndStdDevCalculatorProps {
  data: number[];
}

const VarianceAndStdDevCalculator = ({
  data,
}: VarianceAndStdDevCalculatorProps) => {
  const mean = data.reduce((sum, num) => sum + num, 0) / data.length;
  const squaredDifferences = data.map((num) => Math.pow(num - mean, 2));
  const variance =
    squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) /
    data.length;
  const stdDev = Math.sqrt(variance);

  return (
    <View style={styles.varianceNStdContainer}>
      <Text style={styles.resultContainer}>
        Variance:{" "}
        {Number.isNaN(variance)
          ? "Please enter the data in Input box to compute variance."
          : variance}
      </Text>
      <Text style={styles.resultContainer}>
        Standard Deviation:{" "}
        {Number.isNaN(stdDev)
          ? "Please enter the data in Input box to compute standard deviation."
          : stdDev}
      </Text>
    </View>
  );
};

export default VarianceAndStdDevCalculator;

const styles = StyleSheet.create({
  varianceNStdContainer: {
    gap: 10,
  },
  resultContainer: {
    width: "70%",
  },
});
