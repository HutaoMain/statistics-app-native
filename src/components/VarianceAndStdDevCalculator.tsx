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

  // const roundedVariance = Math.round(variance);

  return (
    <View style={styles.varianceNStdContainer}>
      <Text style={styles.resultContainer}>
        <Text style={{ fontWeight: "bold" }}>
          Variance and Standard Deviation:
        </Text>
        {Number.isNaN(variance) || Number.isNaN(stdDev)
          ? "Please enter the data in Input box to compute variance."
          : variance}
      </Text>
      {/* <Text style={styles.resultContainer}>
        Standard Deviation:{" "}
        {
          ? "Please enter the data in Input box to compute standard deviation."
          : stdDev}
      </Text> */}
      <View style={styles.definition}>
        <Text style={styles.title}>Variance:</Text>
        <Text style={styles.definition}>
          a measure of how data points in a dataset differ from the mean. To
          compute it, subtract the mean from each data point, square the result,
          and then find the average of these squared differences.
        </Text>
        <Text style={styles.title}>Standard Deviation:</Text>
        <Text style={styles.definition}>
          the square root of the variance and represents the average distance of
          the data points from the mean.
        </Text>
      </View>
    </View>
  );
};

export default VarianceAndStdDevCalculator;

const styles = StyleSheet.create({
  varianceNStdContainer: {
    gap: 10,
  },
  resultContainer: {
    width: "100%",
    fontSize: 16,
  },
  definition: {
    width: "100%",
    marginTop: 5,
    fontStyle: "italic",
    fontSize: 15,
    color: "gray",
  },
  title: {
    width: "100%",
    marginTop: 5,
    fontStyle: "italic",
    color: "gray",
    fontWeight: "bold",
    fontSize: 16,
  },
});
