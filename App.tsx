import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [khang, setKhang] = useState({
    name: "Khang",
    age: 20,
  });
  return (
    <View style={styles.container}>
      <Text>
          Lê Hoàng Khang is {khang.age} years old.
      </Text>
      <Button title="Happy birthday!"onPress={
        () => {
          setKhang({
            ...khang,
            age: khang.age + 1,
          });
        }
      }/>
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
});
