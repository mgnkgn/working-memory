import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import GoBackButton from "../components/GoBackButton";
import useGameStore from "../stores/useGameStore";
import { getRandomSymbols, setIsRobotPicking } from "../stores/actions";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import UserOption from "../components/UserOption";

export default function PlayScreen() {
  const { symbols, isRobotPicking } = useGameStore();

  useEffect(() => {
    getRandomSymbols();
  }, []);

  return (
    <View style={styles.container}>
      <GoBackButton />
      <TouchableOpacity
        onPress={() => {
          setIsRobotPicking(!isRobotPicking);
        }}
      >
        <Text>Test</Text>
      </TouchableOpacity>
      <View style={styles.computerRow}>
        <View style={styles.robotContainer}>
          {!isRobotPicking && <UserOption symbol={symbols[2]} />}
        </View>
        <View style={styles.robotContainer}>
          <FontAwesome5 name="robot" size={100} color="black" />
        </View>
        <View style={styles.robotContainer}>
          {isRobotPicking && <UserOption symbol={symbols[0]} />}
        </View>
      </View>

      {/* Top Row Symbol */}
      <View style={styles.topRow}>
        <UserOption symbol={symbols[0]} />
      </View>

      {/* Bottom Row Symbols */}
      <View style={styles.bottomRow}>
        <UserOption symbol={symbols[1]} />
        <UserOption symbol={symbols[2]} />
        <UserOption symbol={symbols[3]} />
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
});
