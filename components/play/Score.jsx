import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import useGameStore from "../../stores/useGameStore";

const Score = () => {
  const { corrects, mistakes, timer, wrongPick } = useGameStore();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View
      style={[
        styles.scoreContainer,
        isDarkMode ? styles.darkScoreContainer : styles.lightScoreContainer,
        wrongPick && { backgroundColor: "red" },
      ]}
    >
      <Text
        style={[
          styles.scoreText,
          isDarkMode ? styles.darkText : styles.lightText,
        ]}
      >
        Score: {corrects * 2 - mistakes}
      </Text>
      <View style={styles.timerContainer}>
        <Text
          style={[
            styles.timerText,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </Text>
        <MaterialCommunityIcons
          name="timer-outline"
          size={30}
          color={isDarkMode ? "white" : "black"}
        />
      </View>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  scoreContainer: {
    width: "100%",
    padding: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  lightScoreContainer: {
    backgroundColor: "white",
  },
  darkScoreContainer: {
    backgroundColor: "#121212",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  timerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  lightText: {
    color: "black",
  },
  darkText: {
    color: "white",
  },
});
