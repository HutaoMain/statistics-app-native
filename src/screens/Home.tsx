import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import ToggleButtonReusable from "../components/ToggleButtonReusable";
import MeanCalculator from "../components/MeanCalculator";
import MedianCalculator from "../components/MedianCalculator";
import ModeCalculator from "../components/ModeCalculator";
import RangeCalculator from "../components/RangeCalculator";
import VarianceAndStdDevCalculator from "../components/VarianceAndStdDevCalculator";
import NumberInput from "../components/NumberInput";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProps } from "../Types";
import { AppProvider } from "../AppContext";

const buttons = [
  { label: "Mean", value: "mean" },
  { label: "Median", value: "median" },
  { label: "Mode", value: "mode" },
  { label: "Range", value: "range" },
  { label: "Variance", value: "variance" },
];

const Home = () => {
  const drawerRef = useRef<DrawerLayoutAndroid>(null);

  const [selectedStat, setSelectedStat] = useState<string | null>("mean");
  const [inputData, setInputData] = useState<string[]>([]);

  const handleStatToggle = (statName: string) => {
    setSelectedStat(statName);
  };

  const openDrawer = () => {
    drawerRef.current?.openDrawer();
  };

  const data = inputData.map((number) => parseFloat(number));

  const navigate = useNavigation<HomeNavigationProps["navigation"]>();

  const goToHistory = () => {
    navigate.navigate("History");
  };

  const renderButtons = () => {
    return buttons.map((button) => (
      <View key={button.value} style={styles.buttonSingleContainer}>
        <Text style={{ fontWeight: "bold" }}>{button.label}</Text>
        <ToggleButtonReusable
          icon="check-circle"
          value={button.value}
          status={selectedStat === button.value ? "checked" : "unchecked"}
          onPressButtonToggle={() => handleStatToggle(button.value)}
        />
      </View>
    ));
  };

  const drawerView = (
    <View style={styles.drawerContainer}>
      {renderButtons()}
      <TouchableOpacity style={styles.historyBtn} onPress={goToHistory}>
        <Text style={{ fontWeight: "bold" }}>History</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerLayoutAndroid
        ref={drawerRef}
        drawerWidth={200}
        drawerPosition={"left"}
        renderNavigationView={() => drawerView}
      >
        <Navbar toggleOpenClose={openDrawer} />
        <View style={styles.container}>
          <View style={styles.resultContainer}>
            <NumberInput />
            {selectedStat === "mean" && <MeanCalculator data={data} />}
            {selectedStat === "median" && <MedianCalculator data={data} />}
            {selectedStat === "mode" && <ModeCalculator data={data} />}
            {selectedStat === "range" && <RangeCalculator data={data} />}
            {selectedStat === "variance" && (
              <VarianceAndStdDevCalculator data={data} />
            )}
          </View>
        </View>
      </DrawerLayoutAndroid>
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
    justifyContent: "center",
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
  resultContainer: {
    width: "90%",
    gap: 10,
    paddingTop: 10,
  },
  textInput: {
    width: "90%",
  },
  buttonSingleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
  },
  drawerTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  historyBtn: {
    width: "70%",
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
