import { StyleSheet, View, useColorScheme } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import useGameStore from "../../stores/useGameStore";
import UserOption from "./UserOption";

const BannedSymbol = () => {
  const { symbols, bannedSymbolIndex } = useGameStore();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View style={[styles.bannedRow]}>
      <FontAwesome5
        name="ban"
        size={85}
        color={isDarkMode ? "black" : "gray"}
        style={styles.bannedIcon}
      />
      <UserOption symbol={symbols[bannedSymbolIndex]} disabled />
    </View>
  );
};

export default BannedSymbol;

const styles = StyleSheet.create({
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
    zIndex: 1,
  },
});
