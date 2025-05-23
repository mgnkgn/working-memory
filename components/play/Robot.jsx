import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import useGameStore from "../../stores/useGameStore";
import UserOption from "./UserOption";

const Robot = () => {
  const { isRobotPicking, robotPick, wrongPick, rightPick, bannedColor } =
    useGameStore();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View style={[styles.computerRow]}>
      <View style={styles.robotContainer}>
        {!isRobotPicking && <UserOption symbol={rightPick} disabled />}
      </View>
      <View style={styles.robotContainer}>
        {wrongPick ? (
          <MaterialCommunityIcons
            name="robot-excited"
            size={100}
            color={isDarkMode ? "white" : "black"}
          />
        ) : (
          <MaterialCommunityIcons
            name="robot"
            size={100}
            color={isRobotPicking ? bannedColor : "transparent"}
          />
        )}
      </View>
      <View style={styles.robotContainer}>
        {isRobotPicking && <UserOption symbol={robotPick} disabled />}
      </View>
    </View>
  );
};

export default Robot;

const styles = StyleSheet.create({
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
    minWidth: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
