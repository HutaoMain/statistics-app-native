import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface MeanCalculatorProps {
  data: number[];
}

const MeanCalculator = ({ data }: MeanCalculatorProps) => {
  const mean = data.reduce((sum, num) => sum + num, 0) / data.length;

  return (
    <View>
      <Text style={styles.resultContainer}>
        Mean:{" "}
        {Number.isNaN(mean)
          ? "Please enter the data in Input box to compute mean."
          : mean}
      </Text>
    </View>
  );
};

export default MeanCalculator;

const styles = StyleSheet.create({
  resultContainer: {
    width: "70%",
  },
});
