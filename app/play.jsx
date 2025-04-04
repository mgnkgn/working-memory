import React from "react";
import { View, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import GoBackButton from "../components/GoBackButton";
import useGameStore from "../stores/useGameStore";
import {
  getRandomSymbols,
  pickRobotSymbol,
  resetGame,
  setIsRobotPicking,
} from "../stores";
import Score from "../components/play/Score";
import Robot from "../components/play/Robot";
import BannedSymbol from "../components/play/BannedSymbol";
import Symbols from "../components/play/Symbols";

export default function PlayScreen() {
  const { wrongPick, timer, startTimer, stopTimer } = useGameStore();

  const setRound = async () => {
    setIsRobotPicking(true);

    // Wait for the robot to pick a symbol
    const randomSymbol = await pickRobotSymbol();

    // Only update `isRobotPicking` after the pick is received
    if (randomSymbol) {
      setIsRobotPicking(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Initialize the game when screen is focused
      getRandomSymbols();
      setRound();
      startTimer();

      return () => {
        stopTimer();
        resetGame();
      };
    }, [])
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `${wrongPick ? "red" : "transparent"}` },
      ]}
    >
      <GoBackButton />

      {/* Score and Timer Row */}
      <Score />

      {/* Robot Row */}
      <Robot />

      {/* Symbols and Options */}
      <Symbols setRound={setRound} />

      {/* Blocked Row */}
      <BannedSymbol />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
