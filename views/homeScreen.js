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

export default function HomeScreen({ navigation }) {
  let currentBalance = navigation.getParam("current_balance");
  let currentBalanceFormatted = currentBalance
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const HandleTransactions = () => {
    navigation.navigate("Transcation");
  };
  const HandleHistory = () => {
    navigation.navigate("History");
  };
  const HandleMore = () => {
    navigation.navigate("More");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        Hey, {navigation.getParam("username")}!
      </Text>
      <View style={styles.balance_box}>
        <MaterialIcons
          name="account-balance-wallet"
          size={40}
          color="#000"
          style={styles.balance_icon}
        />
        <Text style={styles.current_balance}>Your current balance:</Text>
        <Text style={styles.balance_val}>${currentBalanceFormatted}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.subtitle2}>Summary</Text>
        <ScrollView></ScrollView>
      </View>
      <View style={styles.dock}>
        <TouchableOpacity style={styles.homeButton}>
          <MaterialIcons name="home" size={26} color="#77F77F" />
          <Text style={{ color: "#77F77F", fontSize: 12 }}>Home</Text>
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
        <TouchableOpacity style={styles.homeButton} onPress={HandleMore}>
          <MaterialIcons name="more-vert" size={26} color="#8F8FA0" />
          <Text style={{ color: "#8F8FA0", fontSize: 12 }}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    alignItems: "left",
    //justifyContent: "center",
    paddingLeft: 15,
  },
  balance_box: {
    backgroundColor: "#77F77F",
    width: 345,
    height: 200,
    marginTop: 35,
    //marginLeft: 45,
    marginBottom: 0,
    //paddingLeft: 15,
    borderRadius: 30,
    alignItems: "left",
    //justifyContent: "center",
  },
  current_balance: {
    position: "absolute",
    bottom: 120,
    left: 20,
    fontSize: 14,
  },
  balance_val: {
    //color: "#202024",
    position: "absolute",
    bottom: 65,
    left: 20,
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "Helvetica Neue",
  },
  subtitle: {
    color: "#77F77F",
    fontSize: 24,
    fontWeight: "bold",
    //fontFamily: "HelveticaNeue-BoldItalic",
    marginTop: 75,
    //marginLeft: 100,
  },
  button: {
    flexDirection: "row",
  },
  balance_icon: {
    position: "absolute",
    top: 10,
    left: 150,
  },
  // arrow: {
  //   backgroundColor: "#77F77F",
  //   borderRadius: 5,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: 39.3,
  //   width: 20,
  //   borderTopLeftRadius: 0,
  //   borderBottomLeftRadius: 0,
  // },
  subtitle2: {
    color: "#77F77F",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 30,
  },
  body: {
    flexDirection: "row",
    backgroundColor: "#484850",
    position: "absolute",
    width: 375,
    height: 600,
    top: 380,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
