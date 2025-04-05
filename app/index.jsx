import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <View
        style={[
          styles.titleContainer,
          isDarkMode ? styles.darkBorder : styles.lightBorder,
        ]}
      >
        <Text
          style={[
            styles.title,
            isDarkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Focus Sprint
        </Text>
      </View>

      <View style={styles.secondRow}>
        <TouchableOpacity
          style={[
            styles.titleContainer,
            isDarkMode ? styles.darkPlayBorder : { borderColor: "green" },
          ]}
          onPress={() => router.push("/play")}
        >
          <Text
            style={[
              styles.title,
              isDarkMode ? styles.darkPlayText : { textShadowColor: "green" },
            ]}
          >
            Play
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.titleContainer,
            isDarkMode ? styles.darkRulesBorder : { borderColor: "purple" },
          ]}
          onPress={() => router.push("/rules")}
        >
          <Text
            style={[
              styles.title,
              isDarkMode ? styles.darkRulesText : { textShadowColor: "purple" },
            ]}
          >
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lightContainer: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 3,
    padding: 20,
    borderRadius: 50,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  lightBorder: {
    borderColor: "blue",
    shadowColor: "blue",
  },
  darkBorder: {
    borderColor: "cyan",
    shadowColor: "cyan",
  },
  darkPlayBorder: {
    borderColor: "lime",
    shadowColor: "lime",
  },
  darkRulesBorder: {
    borderColor: "magenta",
    shadowColor: "magenta",
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  lightText: {
    color: "black",
    textShadowColor: "blue",
  },
  darkText: {
    color: "white",
    textShadowColor: "cyan",
    textShadowRadius: 15,
  },
  darkPlayText: {
    color: "white",
    textShadowColor: "lime",
    textShadowRadius: 15,
  },
  darkRulesText: {
    color: "white",
    textShadowColor: "magenta",
    textShadowRadius: 15,
  },
  secondRow: {
    padding: 20,
    flexDirection: "row",
    gap: 20,
  },
});
