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
        Range:{" "}
        {Number.isNaN(range)
          ? "Please enter the data in Input box to compute range."
          : range}
      </Text>
    </View>
  );
};

export default RangeCalculator;

const styles = StyleSheet.create({
  resultContainer: {
    width: "70%",
  },
});
