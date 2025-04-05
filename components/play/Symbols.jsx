import React from "react";
import { StyleSheet, View } from "react-native";
import UserOption from "./UserOption";
import useGameStore from "../../stores/useGameStore";

const Symbols = ({ setRound }) => {
  const { symbols, isRobotPicking, colors } = useGameStore();

  return (
    <View style={styles.container}>
      {/* Top Row Symbol */}
      <View style={styles.topRow}>
        <UserOption
          symbol={symbols[0]}
          setRound={setRound}
          disabled={isRobotPicking}
          containerStyle={{ backgroundColor: colors[0] }}
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
              containerStyle={{ backgroundColor: colors[index + 1] }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Symbols;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
});
