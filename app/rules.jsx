import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from "react-native";
import GoBackButton from "../components/GoBackButton";

export default function RulesScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <GoBackButton />
      <Text
        style={[
          styles.header,
          isDarkMode ? styles.darkHeader : styles.lightHeader,
        ]}
      >
        Game Rules
      </Text>
      <ScrollView style={styles.rulesContainer}>
        <View style={styles.ruleSection}>
          <Text
            style={[
              styles.ruleTitle,
              isDarkMode ? styles.darkRuleTitle : styles.lightRuleTitle,
            ]}
          >
            Working Memory Game
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            Your objective is simple:
          </Text>
        </View>

        <View style={styles.ruleSection}>
          <Text
            style={[
              styles.ruleTitle,
              isDarkMode ? styles.darkRuleTitle : styles.lightRuleTitle,
            ]}
          >
            🚫 Don’t Pick:
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            1. What the computer picks.
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            2. The banned symbol.
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            3. What was shown earlier.
          </Text>
        </View>

        <View style={styles.ruleSection}>
          <Text
            style={[
              styles.ruleTitle,
              isDarkMode ? styles.darkRuleTitle : styles.lightRuleTitle,
            ]}
          >
            ✔️ Pick:
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            Pick the one that was shown on the top left, unless overruled.
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            If it is overruled, you may pick symbols that were not eliminated by
            the robot.
          </Text>
        </View>

        <View style={styles.ruleSection}>
          <Text
            style={[
              styles.ruleTitle,
              isDarkMode ? styles.darkRuleTitle : styles.lightRuleTitle,
            ]}
          >
            ❌ Mistakes:
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            - Picking the banned symbol
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            - Picking what the robot picks
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            - Picking an invalid symbol
          </Text>
        </View>

        <View style={styles.ruleSection}>
          <Text
            style={[
              styles.ruleTitle,
              isDarkMode ? styles.darkRuleTitle : styles.lightRuleTitle,
            ]}
          >
            🏆 Winning:
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            - Correct picks increase your score.
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            - The game becomes harder over time.
          </Text>
        </View>

        <View style={styles.ruleSection}>
          <Text
            style={[
              styles.ruleTitle,
              isDarkMode ? styles.darkRuleTitle : styles.lightRuleTitle,
            ]}
          >
            ⚠️ Important:
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            - Make too many mistakes and you lose the round.
          </Text>
          <Text
            style={[
              styles.ruleText,
              isDarkMode ? styles.darkRuleText : styles.lightRuleText,
            ]}
          >
            - Pay attention to the robot’s choices. It may smile when you do a
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
    paddingTop: 50,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  lightContainer: {
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  darkHeader: {
    color: "#e0e0e0",
  },
  lightHeader: {
    color: "#333",
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
    marginBottom: 5,
  },
  darkRuleTitle: {
    color: "#e0e0e0",
  },
  lightRuleTitle: {
    color: "#1a1a1a",
  },
  ruleText: {
    fontSize: 16,
    lineHeight: 24,
  },
  darkRuleText: {
    color: "#b0b0b0",
  },
  lightRuleText: {
    color: "#555",
  },
});
