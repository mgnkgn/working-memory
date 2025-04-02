import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { borderColor: "blue" }]}>
        <Text style={[styles.title, { textShadowColor: "blue" }]}>
          Working Memory
        </Text>
      </View>
      <View style={styles.secondRow}>
        <TouchableOpacity
          style={[styles.titleContainer, { borderColor: "green" }]}
          onPress={() => router.push("/play")} // Navigate to play.js
        >
          <Text style={[styles.title, { textShadowColor: "green" }]}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.titleContainer, { borderColor: "purple" }]}
          onPress={() => router.push("/rules")} // Navigate to rules.js
        >
          <Text style={[styles.title, { textShadowColor: "purple" }]}>
            Rules
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderColor: "gray",
    borderWidth: 3,
    padding: 20,
    borderRadius: 50,
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  secondRow: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});
