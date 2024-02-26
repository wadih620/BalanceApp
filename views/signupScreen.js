import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";

import BigButton from "./components/bigButton";
import ErrorAlert from "./components/errorAlert";
import { useState } from "react";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [current_balance, set_current_balance] = useState(0);
  const [error_message, set_error_message] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const URL = "http://192.168.1.3:3001/users";

  const usernameIsTaken = async (userName) => {
    try {
      const response = await fetch(URL + "/" + userName, {
        method: "GET",
        headers: {},
      });

      const userData = await response.json();

      if (userData.username === userName) {
        //console.log("taken");
        return true;
      } else {
        //console.log("Not taken");
        return false;
      }
    } catch (error) {
      Alert.alert("Error", "error");
    }
  };

  const handleSignUp = async () => {
    const isTaken = await usernameIsTaken(username);
    if (isTaken) {
      setAlertVisible(true);
      set_error_message("Username already taken");
    } else if (password.length < 8 || password.length > 32) {
      setAlertVisible(true);
      set_error_message("Password must be between 8-32 characters");
    } else if (confirmPass !== password) {
      setAlertVisible(true);
      set_error_message("Passwords do not match");
    } else {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ username, password, current_balance }),
        });

        if (!response.ok) {
          throw new Error("Sign Up failed");
        }
        setAlertVisible(true);
        set_error_message("Sign up successful!");
        setTimeout(() => {
          navigation.navigate("Login");
        }, 1000);
      } catch (error) {
        Alert.alert("Error", "Sign up failed");
      }
    }
  };

  const LoginpressHandler = () => {
    navigation.goBack();
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
            Create A New Account! Add Your Current Cash Balance
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            keyboardAppearance="dark"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            keyboardAppearance="dark"
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            keyboardAppearance="dark"
            onChangeText={setconfirmPass}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Current Balance"
            keyboardType="numeric"
            keyboardAppearance="dark"
            onChangeText={set_current_balance}
          />
          <BigButton
            title="Sign Up"
            onPress={handleSignUp}
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

      <View style={styles.haveAccount}>
        <Text style={styles.smallText}>Already have an account? </Text>
        <TouchableOpacity onPress={LoginpressHandler}>
          <Text style={styles.smallTextNav}>Login</Text>
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
    marginBottom: 35,
    textAlign: "left",
    paddingRight: 29,
    paddingBottom: 20,
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
  haveAccount: {
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
    paddingLeft: 30,
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Align items vertically
    justifyContent: "center", // Align items horizontally
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
