import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const useEnteredData = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<string[]>([]);

  const saveDataToStorage = async (data: string[]) => {
    try {
      await AsyncStorage.setItem("enteredNumbers", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("enteredNumbers");
        const data = storedData ? JSON.parse(storedData) : [];
        setEnteredNumbers(data);
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };

    fetchData();
  }, [enteredNumbers]);

  const handleEnteredData = (enteredSingleNumber: string) => {
    // Check if enteredSingleNumber is a valid number
    if (!/^\d+$/.test(enteredSingleNumber)) {
      // Show alert for an invalid number
      Alert.alert("Number only");
      return;
    }

    // Add the valid number to the array
    const updatedNumbers = [...enteredNumbers, enteredSingleNumber];
    setEnteredNumbers(updatedNumbers);
    saveDataToStorage(updatedNumbers);
  };

  const clearEnteredData = () => {
    setEnteredNumbers([]);
    saveDataToStorage([]);
  };

  return { enteredNumbers, handleEnteredData, clearEnteredData };
};

export default useEnteredData;
