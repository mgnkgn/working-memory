import { View, Text, StyleSheet } from "react-native";
import GoBackButton from "../components/GoBackButton";

export default function RulesScreen() {
  return (
    <View style={styles.container}>
      <GoBackButton />
      <Text style={styles.text}>Rules Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
});
