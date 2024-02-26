import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
} from "react-native";

const ErrorAlert = ({ visible, message, alertStyle, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.container}>
          <View style={[styles.alert, alertStyle]}>
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  alert: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 0,
    width: 400,
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default ErrorAlert;
