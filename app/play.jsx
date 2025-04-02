import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import GoBackButton from "../components/GoBackButton";

export default function PlayScreen() {
  return (
    <View style={styles.container}>
      <GoBackButton />

      <Text style={styles.text}>Play Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
});
