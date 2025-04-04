import { View, Text, StyleSheet, ScrollView } from "react-native";
import GoBackButton from "../components/GoBackButton";

export default function RulesScreen() {
  return (
    <View style={styles.container}>
      <GoBackButton />
      <Text style={styles.header}>Game Rules</Text>
      <ScrollView style={styles.rulesContainer}>
        <View style={styles.ruleSection}>
          <Text style={styles.ruleTitle}>Working Memory Game</Text>
          <Text style={styles.ruleText}>Your objective is simple:</Text>
        </View>

        <View style={styles.ruleSection}>
          <Text style={styles.ruleTitle}>🚫 Don’t Pick:</Text>
          <Text style={styles.ruleText}>1. What the computer picks.</Text>
          <Text style={styles.ruleText}>2. The banned symbol.</Text>
          <Text style={styles.ruleText}>3. What was shown earlier.</Text>
        </View>

        <View style={styles.ruleSection}>
          <Text style={styles.ruleTitle}>✔️ Pick:</Text>
          <Text style={styles.ruleText}>
            Pick the one that was shown on the top left, unless overruled.
          </Text>
          <Text style={styles.ruleText}>
            If it is overruled, you may pick symbols that were not eliminated by
            robot.
          </Text>
        </View>

        <View style={styles.ruleSection}>
          <Text style={styles.ruleTitle}>❌ Mistakes:</Text>
          <Text style={styles.ruleText}>- Picking the banned symbol</Text>
          <Text style={styles.ruleText}>- Picking what the robot picks</Text>
          <Text style={styles.ruleText}>- Picking an invalid symbol</Text>
        </View>

        <View style={styles.ruleSection}>
          <Text style={styles.ruleTitle}>🏆 Winning:</Text>
          <Text style={styles.ruleText}>
            - Correct picks increase your score.
          </Text>
          <Text style={styles.ruleText}>
            - The game becomes harder over time.
          </Text>
        </View>

        <View style={styles.ruleSection}>
          <Text style={styles.ruleTitle}>⚠️ Important:</Text>
          <Text style={styles.ruleText}>
            - Make too many mistakes and you lose the round.
          </Text>
          <Text style={styles.ruleText}>
            - Pay attention to the robot’s choices. It may smile when you do
            mistake.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  rulesContainer: {
    width: "100%",
  },
  ruleSection: {
    marginBottom: 20,
  },
  ruleTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 5,
  },
  ruleText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
});
