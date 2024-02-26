import React, { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import BigButton from "./components/bigButton";
import { Assets } from "react-navigation-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function TransactionsScreen({ navigation }) {
  const handleHome = () => {
    navigation.navigate("Home");
  };
  const HandleHistory = () => {
    navigation.navigate("History");
  };
  const HandleMore = () => {
    navigation.navigate("More");
  };

  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleRevenue = () => {
    setIsPressed(false);
  };
  const handleExpense = () => {
    setIsPressed(true);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Transactions</Text>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{ paddingRight: 60 }}
              onPress={handleRevenue}
            >
              <View
                style={[styles.subtitle1, !isPressed && styles.buttonPressed]}
              >
                <Text
                  style={{ color: "#77F77F", fontSize: 18, fontWeight: "bold" }}
                >
                  Revenue
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleExpense}>
              <View
                style={[styles.subtitle2, isPressed && styles.buttonPressed]}
              >
                <Text
                  style={{ color: "#77F77F", fontSize: 18, fontWeight: "bold" }}
                >
                  Expenses
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <TextInput
            placeholder="Input total amount"
            keyboardType="numeric"
            style={styles.textInput}
            keyboardAppearance="dark"
            //onChangeText={setAmount}
          />
          <BigButton
            title="Submit"
            //onPress={handleSignUp}
            buttonStyle={{ backgroundColor: "#77F77F", width: 320 }}
            textStyle={{ color: "#000" }}
          />
        </View>
        <View style={styles.dock}>
          <TouchableOpacity style={styles.homeButton} onPress={handleHome}>
            <MaterialIcons name="home" size={26} color="#8F8FA0" />
            <Text style={{ color: "#8F8FA0", fontSize: 12 }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton}>
            <MaterialIcons name="exposure" size={26} color="#77F77F" />
            <Text style={{ color: "#77F77F", fontSize: 12 }}>Transactions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton} onPress={HandleHistory}>
            <MaterialIcons name="assessment" size={26} color="#8F8FA0" />
            <Text style={{ color: "#8F8FA0", fontSize: 12 }}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton} onPress={HandleMore}>
            <MaterialIcons name="more-vert" size={26} color="#8F8FA0" />
            <Text style={{ color: "#8F8FA0", fontSize: 12 }}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    //alignItems: "left",
    justifyContent: "center",
    //paddingLeft: 15,
  },
  header: {
    position: "absolute",
    top: 0,
    height: 200,
    width: 375,
    backgroundColor: "#000",
    paddingTop: 80,
    paddingLeft: 15,
    alignItems: "left",
    borderWidth: 1,
    borderBottomColor: "#484850",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#77F77F",
  },
  currDay: {
    fontSize: 28,
    //fontWeight: "bold",
    color: "#77F77F",
  },
  currMonth: {
    fontSize: 28,
    //fontWeight: "bold",
    color: "#404047",
  },
  currDate: {
    fontSize: 78,
    fontWeight: "bold",
    color: "#AEAEC2",
  },
  currYear: {
    fontSize: 14,
    color: "#77F77F",
  },
  subtitle1: {
    //backgroundColor: "#484850",
    marginTop: 44,
    marginRight: 20,
    borderRadius: 10,
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle2: {
    //backgroundColor: "#484850",
    marginTop: 44,
    marginRight: 20,
    borderRadius: 10,
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "#484850",
  },
  body: {
    position: "absolute",
    top: 300,
    marginLeft: 20,
    width: 320,
    height: 150,
    alignItems: "center",
    alignSelf: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#77F77F",
    borderRadius: 5,
    backgroundColor: "#DBE1DC",
    padding: 8,
    marginTop: 7,
    marginBottom: 35,
    width: 320,
    height: 44,
  },
  dock: {
    flexDirection: "row",
    alignItems: "left",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 400,
    height: 70,
  },
  homeButton: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 35,
    alignItems: "center",
  },
});
