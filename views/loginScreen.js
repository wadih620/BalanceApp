import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";

import BigButton from "./components/bigButton";
import ErrorAlert from "./components/errorAlert";

export default function LoginScreen({ navigation }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error_message, set_error_message] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  let current_balance = 0;
  const URL = "http://192.168.1.3:3001/users/";

  const handleLogin = async () => {
    //console.log(username);
    try {
      const response = await fetch(URL + username, {
        method: "GET",
        headers: {},
      });

      const userData = await response.json();

      //console.log(userData.password);

      if (!userData.username) {
        setAlertVisible(true);
        set_error_message("Username does not exist");
      } else if (userData.password != password) {
        setAlertVisible(true);
        set_error_message("Password is incorrect");
      } else {
        current_balance = userData.current_balance;
        //console.log(current_balance);
        setAlertVisible(true);
        set_error_message("Login successful!");
        setTimeout(() => {
          hideAlert();
          navigation.navigate("Home", userData);
        }, 1000);
      }
    } catch (error) {
      Alert.alert("Error", "Login failed");
    }
  };

  const SignuppressHandler = () => {
    navigation.navigate("Signup");
  };

  const hideAlert = () => {
    setAlertVisible(false);
    set_error_message("");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null} // Adjust behavior based on platform
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} // Adjust vertical offset based on platform
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.subtitle}>
            Login To Keep Track Of Your Finances
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            keyboardAppearance="dark"
            onChangeText={setusername}
            textContentType="oneTimeCode"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            keyboardAppearance="dark"
            onChangeText={setpassword}
            secureTextEntry={true}
            textContentType="oneTimeCode"
          />
          <BigButton
            title="Login"
            onPress={handleLogin}
            buttonStyle={{ backgroundColor: "#77F77F" }} // Customize button background color
            textStyle={{ color: "#000" }} // Customize text color
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <ErrorAlert
        visible={alertVisible}
        message={error_message}
        alertStyle={{ backgroundColor: "#77F77F" }}
        onClose={hideAlert}
      />
      <View style={styles.noAccount}>
        <Text style={styles.smallText}>Don't have an account yet? </Text>
        <TouchableOpacity onPress={SignuppressHandler}>
          <Text style={styles.smallTextNav}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    //alignItems: "left",
    justifyContent: "center",
    paddingLeft: 15,
  },
  smallText: {
    color: "#fff",
  },
  smallTextNav: {
    color: "#77F77F",
  },
  subtitle: {
    color: "#77F77F",
    fontSize: 25,
    fontWeight: "bold",
    //fontFamily: "Trebuchet MS",
    marginBottom: 130,
    textAlign: "left",
    paddingRight: 29,
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
  },
  noAccount: {
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
    paddingLeft: 30,
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Align items vertically
    justifyContent: "center", // Align items horizontally
  },
  button: {
    color: "#77F77F",
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
    paddingLeft: 210,
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
