import React, { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import BigButton from "./components/bigButton";
import { Assets } from "react-navigation-stack";
import { MaterialIcons } from "@expo/vector-icons";

export default function MoreScreen({ navigation }) {
  const handleHome = () => {
    navigation.navigate("Home");
  };
  const HandleTransactions = () => {
    navigation.navigate("Transcation");
  };
  const HandleHistory = () => {
    navigation.navigate("History");
  };
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <View style={styles.dock}>
        <TouchableOpacity style={styles.homeButton} onPress={handleHome}>
          <MaterialIcons name="home" size={26} color="#8F8FA0" />
          <Text style={{ color: "#8F8FA0", fontSize: 12 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={HandleTransactions}
        >
          <MaterialIcons name="exposure" size={26} color="#8F8FA0" />
          <Text style={{ color: "#8F8FA0", fontSize: 12 }}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton} onPress={HandleHistory}>
          <MaterialIcons name="assessment" size={26} color="#8F8FA0" />
          <Text style={{ color: "#8F8FA0", fontSize: 12 }}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton}>
          <MaterialIcons name="more-vert" size={26} color="#77F77F" />
          <Text style={{ color: "#77F77F", fontSize: 12 }}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    alignItems: "left",
    justifyContent: "center",
    paddingLeft: 15,
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
