import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BigButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]} // Apply custom button styles
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue", // Default button background color
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  text: {
    color: "white", // Default text color
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BigButton;
