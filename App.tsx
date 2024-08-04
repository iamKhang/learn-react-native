import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("N/A");
  const [age, setAge] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={{
          width: 200,
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        onChangeText={(value) => {
          setName(value);
        }}
        autoCapitalize="words"
        multiline={true}
        numberOfLines={4}
      ></TextInput>

      <Text>Age:</Text>
      <TextInput
        style={{
          width: 200,
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        onChangeText={(value) => {
          setAge(+value);
        }}
        keyboardType="numeric"
        maxLength={2}
      ></TextInput>

      <Text>
        {name} is {age} years old.
      </Text>
      <Button
        title="Happy birthday!"
        onPress={() => {
          setAge(age + 1);
        }}
      />
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
