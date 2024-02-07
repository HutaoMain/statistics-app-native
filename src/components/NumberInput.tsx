import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import HorizontalLine from "./HorizontalLine";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "../AppContext";

const NumberInput = () => {
  const {
    inputData,
    setInputData,
    enteredNumbers,
    setEnteredNumbers,
    clearData,
  } = useAppContext();

  const [enteredSingleNumber, setEnteredSingleNumber] = useState<string>("");

  const handleEnteredData = async () => {
    // Check if enteredSingleNumber is a valid number
    if (!/^\d*\.?\d+$/.test(enteredSingleNumber)) {
      // Show alert for an invalid number
      Alert.alert("Enter a valid number");
      // Reset enteredSingleNumber
      setEnteredSingleNumber("");
      return;
    }

    // Update the state with the valid number
    setEnteredNumbers((prevNumbers) => [...prevNumbers, enteredSingleNumber]);
    setInputData((prevNumbers: string[]) => [
      ...prevNumbers,
      enteredSingleNumber,
    ]);

    // Reset enteredSingleNumber
    setEnteredSingleNumber("");
  };

  useEffect(() => {
    AsyncStorage.setItem("numbers", JSON.stringify(enteredNumbers))
      .then(() => {
        console.log("Data saved successfully");
      })
      .catch((error) => {
        console.log("Error saving data", error);
      });
  }, [enteredNumbers, inputData]);

  const handleClearData = () => {
    setInputData([]);
  };

  const handleRemoveNumber = (index: number) => {
    const updatedNumbers = [...inputData];
    updatedNumbers.splice(index, 1);
    setInputData(updatedNumbers);
  };

  return (
    <View>
      {inputData.length !== 0 && (
        <>
          <Text style={styles.title}>Data Entered:</Text>
          <ScrollView style={styles.enteredDataContainer}>
            {inputData.map((number, index) => (
              <View key={index}>
                <View style={styles.enteredData}>
                  <TouchableOpacity onPress={() => handleRemoveNumber(index)}>
                    <FontAwesome name="minus-circle" size={30} color="red" />
                  </TouchableOpacity>
                  <Text style={styles.number}>{number}</Text>
                </View>
                <HorizontalLine />
              </View>
            ))}
          </ScrollView>
        </>
      )}

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Enter your Data here: </Text>
        <TextInput
          placeholder="Enter number"
          keyboardType="numeric"
          value={enteredSingleNumber}
          onChangeText={(text) => setEnteredSingleNumber(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.enteredDataBtn}
          onPress={handleEnteredData}
        >
          <Text style={styles.enteredDataBtnText}>Enter Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearDataBtn} onPress={handleClearData}>
          <Text style={styles.clearDataBtnText}>Clear Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    gap: 5,
    marginTop: 10,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  title: {
    fontSize: 20,
  },
  enteredDataContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 300,
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
  },
  enteredDataBtn: {
    padding: 10,
    width: 120,
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  enteredDataBtnText: {
    color: "#ffffff",
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
});
