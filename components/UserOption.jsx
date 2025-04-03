import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const UserOption = ({ symbol }) => {
  return (
    <TouchableOpacity style={styles.symbolBlock}>
      <Text>{symbol?.emoji}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  symbolBlock: {
    width: "25%",
    height: "15%",
    minHeight: 200,
    width: 200,
    borderRadius: 20,
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserOption;
