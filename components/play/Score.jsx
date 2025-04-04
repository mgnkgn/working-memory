import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import useGameStore from "../../stores/useGameStore";

const Score = () => {
  const { corrects, mistakes, timer } = useGameStore();

  return (
    <View style={styles.scoreContainer}>
      <Text style={styles.scoreText}>Score: {corrects * 2 - mistakes}</Text>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </Text>
        <MaterialCommunityIcons name="timer-outline" size={30} color="black" />
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
});
