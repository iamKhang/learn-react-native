import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* Component con không kế thừa CSS từ cha (container) ngoại trừ các thuộc tính mặc định */}
        <Text style={styles.header}>Hello World</Text>
      </View>
    </View>
  );
}

// CSS in JS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  demoCSS: {
    color: "violet",
    fontSize: 60,
    borderColor: "green",
    borderWidth: 1,
  },

  header: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },
});
