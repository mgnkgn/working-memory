import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { checkUserAnswer } from "../stores";

const UserOption = ({ symbol, disabled = false, setRound }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const onUserChoose = (symbol) => {
    checkUserAnswer(symbol);
    setRound();
  };

  return (
    <TouchableOpacity
      style={[
        styles.symbolBlock,
        isDarkMode ? styles.darkSymbolBlock : styles.lightSymbolBlock,
      ]}
      disabled={disabled}
      onPress={() => onUserChoose(symbol)}
    >
      <Text
        style={[
          styles.symbolText,
          isDarkMode ? styles.darkText : styles.lightText,
        ]}
      >
        {symbol?.emoji}
      </Text>
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
  lightSymbolBlock: {
    backgroundColor: "white",
    borderColor: "black",
  },
  darkSymbolBlock: {
    backgroundColor: "#e8e3d5",
    borderColor: "#b0afac",
  },
  lightText: {
    color: "black",
    zIndex: 3,
  },
  darkText: {
    color: "white",
    zIndex: 3,
  },
  symbolText: {
    fontSize: 70,
  },
});

export default UserOption;
