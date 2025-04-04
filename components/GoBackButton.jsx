// components/GoBackButton.js
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function GoBackButton({ route }) {
  const router = useRouter();

  // Navigate to the specified route, or default to "/"
  const handleGoBack = () => {
    if (route) {
      router.push(route);
    } else {
      router.push("/");
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleGoBack}>
      <Text style={styles.buttonText}>Go Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 70,
    left: 20,
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
