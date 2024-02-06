import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import HorizontalLine from "../components/HorizontalLine";
import AsyncStorage from "@react-native-async-storage/async-storage";

const History = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<string[]>([]);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  const refreshData = () => {
    setIsRefresh(!isRefresh);
  };

  useEffect(() => {
    const getData = async () => {
      await AsyncStorage.getItem("numbers")
        .then((value) => {
          if (value !== null) {
            // Convert the value to an array
            const data = JSON.parse(value);
            // Set the state with the data

            console.log(data);

            setEnteredNumbers(data);

            console.log("Data retrieved successfully");
          } else {
            setEnteredNumbers([]);
          }
        })
        .catch((error) => {
          console.log("Error retrieving data", error);
        });
    };
    getData();
  }, [isRefresh]);

  const clearEnteredData = () => {
    AsyncStorage.removeItem("numbers");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.enteredDataContainer}>
        {enteredNumbers.map((number, index) => (
          <View key={index}>
            <View style={styles.enteredData}>
              <Text style={styles.number}>{number}</Text>
            </View>
            <HorizontalLine />
          </View>
        ))}
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.clearDataBtn}
          onPress={clearEnteredData}
        >
          <Text style={styles.clearDataBtnText}>Clear Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.refreshBtn} onPress={refreshData}>
          <Text style={styles.refreshBtnText}>Refresh Data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
  },
  enteredDataContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  enteredData: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    alignItems: "center",
    paddingTop: 20,
  },
  number: {
    fontSize: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    paddingLeft: 10,
  },
  clearDataBtn: {
    padding: 10,
    width: 120,
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  clearDataBtnText: {
    color: "#ffffff",
  },
  refreshBtn: {
    backgroundColor: "blue",
    padding: 10,
    width: 120,
    borderRadius: 10,
  },
  refreshBtnText: {
    color: "white",
    textAlign: "center",
  },
});
