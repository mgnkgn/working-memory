import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import GoBackButton from "../components/GoBackButton";
import useGameStore from "../stores/useGameStore";
import {
  getRandomSymbols,
  pickRobotSymbol,
  resetGame,
  setIsRobotPicking,
} from "../stores";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import UserOption from "../components/UserOption";

export default function PlayScreen() {
  const {
    symbols,
    isRobotPicking,
    corrects,
    mistakes,
    robotPick,
    bannedSymbolIndex,
    wrongPick,
    rightPick,
  } = useGameStore();

  const setRound = async () => {
    console.log("round init...");
    setIsRobotPicking(true);

    // Wait for the robot to pick a symbol
    const randomSymbol = await pickRobotSymbol();

    console.log("received randomSymbol", randomSymbol);

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

      // Reset game when screen is unfocused
      return () => {
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

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score: {corrects * 2 - mistakes}</Text>
      </View>

      <View style={styles.computerRow}>
        <View style={styles.robotContainer}>
          {!isRobotPicking && <UserOption symbol={rightPick} disabled />}
        </View>
        <View style={styles.robotContainer}>
          {wrongPick ? (
            <MaterialCommunityIcons
              name="robot-excited"
              size={100}
              color="black"
            />
          ) : (
            <MaterialCommunityIcons
              name="robot"
              size={100}
              color={`${isRobotPicking ? "black" : "transparent"}`}
            />
          )}
        </View>
        <View style={styles.robotContainer}>
          {isRobotPicking && <UserOption symbol={robotPick} disabled />}
        </View>
      </View>

      {/* Top Row Symbol */}
      <View style={styles.topRow}>
        <UserOption
          symbol={symbols[0]}
          setRound={setRound}
          disabled={isRobotPicking}
        />
      </View>

      {/* Bottom Row Symbols */}
      <View style={styles.bottomRow}>
        {symbols.slice(1, 4).map((s, index) => {
          return (
            <UserOption
              key={s.id}
              symbol={s}
              setRound={setRound}
              disabled={isRobotPicking}
            />
          );
        })}
      </View>

      {/* Blocked Row */}
      <View style={styles.bannedRow}>
        <FontAwesome5
          name="ban"
          size={150}
          color="gray"
          style={styles.bannedIcon}
        />
        <UserOption symbol={symbols[bannedSymbolIndex]} disabled />
      </View>
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

  text: { fontSize: 24, fontWeight: "bold" },
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
  computerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  robotContainer: {
    padding: 20,
    marginBottom: 100,
    alignSelf: "center",
    minWidth: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topRow: {
    display: "flex",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 20,
    elevation: 20,
  },
  bannedRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    position: "relative",
  },
  bannedIcon: {
    position: "absolute",
    zIndex: -1,
  },
});
