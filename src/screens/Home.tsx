import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ToggleButtonReusable from "../components/ToggleButtonReusable";
import MeanCalculator from "../components/MeanCalculator";
import MedianCalculator from "../components/MedianCalculator";
import ModeCalculator from "../components/ModeCalculator";
import RangeCalculator from "../components/RangeCalculator";
import VarianceAndStdDevCalculator from "../components/VarianceAndStdDevCalculator";
import { TextInput } from "react-native-paper";

const Home = () => {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [inputData, setInputData] = useState<string>("");

  const handleStatToggle = (statName: string) => {
    setSelectedStat(statName);
  };

  const data = inputData.split(",").map((num) => parseFloat(num));

  return (
    <SafeAreaView style={styles.home}>
      <Navbar />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSingleContainer}>
            <Text>Mean</Text>
            <ToggleButtonReusable
              icon="check-circle"
              value="mean"
              status={selectedStat === "mean" ? "checked" : "unchecked"}
              onPressButtonToggle={() => handleStatToggle("mean")}
            />
          </View>
          <View style={styles.buttonSingleContainer}>
            <Text>Median</Text>
            <ToggleButtonReusable
              icon="check-circle"
              value="median"
              status={selectedStat === "median" ? "checked" : "unchecked"}
              onPressButtonToggle={() => handleStatToggle("median")}
            />
          </View>
          <View style={styles.buttonSingleContainer}>
            <Text>Mode</Text>
            <ToggleButtonReusable
              icon="check-circle"
              value="mode"
              status={selectedStat === "mode" ? "checked" : "unchecked"}
              onPressButtonToggle={() => handleStatToggle("mode")}
            />
          </View>
          <View style={styles.buttonSingleContainer}>
            <Text>Range</Text>
            <ToggleButtonReusable
              icon="check-circle"
              value="range"
              status={selectedStat === "range" ? "checked" : "unchecked"}
              onPressButtonToggle={() => handleStatToggle("range")}
            />
          </View>
          <View style={styles.buttonSingleContainer}>
            <Text>Variance </Text>
            <Text>Standard Deviation</Text>
            <ToggleButtonReusable
              icon="check-circle"
              value="variance"
              status={selectedStat === "variance" ? "checked" : "unchecked"}
              onPressButtonToggle={() => handleStatToggle("variance")}
            />
          </View>
        </View>
        <View style={styles.resultContainer}>
          <TextInput
            mode="outlined"
            label="Data"
            placeholder="Enter data separated by commas"
            onChangeText={setInputData}
            value={inputData}
            style={styles.textInput}
          />

          {selectedStat === "mean" && <MeanCalculator data={data} />}
          {selectedStat === "median" && <MedianCalculator data={data} />}
          {selectedStat === "mode" && <ModeCalculator data={data} />}
          {selectedStat === "range" && <RangeCalculator data={data} />}
          {selectedStat === "variance" && (
            <VarianceAndStdDevCalculator data={data} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
  buttonContainer: {
    width: "23%",
    height: "100%",
    alignItems: "center",
    paddingBottom: 130,
    elevation: 1,
    backgroundColor: "#e8e4c9",
  },
  buttonSingleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainer: {
    width: "100%",
    gap: 20,
    paddingTop: 40,
  },
  textInput: {
    width: "70%",
  },
});
