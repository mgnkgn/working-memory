import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import useGameStore from "../stores/useGameStore";
import GoBackButton from "./GoBackButton";

const FinishScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const { corrects, mistakes } = useGameStore();

  const totalPicks = corrects + mistakes;
  const precision =
    totalPicks > 0 ? ((corrects / totalPicks) * 100).toFixed(2) : "0";

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <GoBackButton />
      <Text style={[styles.scoreText, isDarkMode && styles.darkText]}>
        Your Score - {corrects * 2 - mistakes}
      </Text>
      <Text style={[styles.precisionText, isDarkMode && styles.darkText]}>
        Your Precision - {precision}%
      </Text>
    </View>
  );
};

export default FinishScreen;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  darkContainer: {
    backgroundColor: "#222",
  },
  scoreText: {
    fontSize: 40,
    fontWeight: "500",
  },
  precisionText: {
    fontSize: 30,
    fontWeight: "400",
    marginTop: 10,
    color: "#555",
  },
  darkText: {
    color: "#fff",
  },
});
