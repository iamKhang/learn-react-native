import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [student, setStudent] = useState([
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
    { id: 3, name: "Smith", age: 22 },
    { id: 4, name: "Alex", age: 23 },
    { id: 5, name: "Tom", age: 24 },
    { id: 6, name: "Jerry", age: 25 },
    { id: 7, name: "Harry", age: 26 },
    { id: 8, name: "Peter", age: 27 },
  ]);
  return (
    <View style={styles.container}>
      <View>
        <Text>Student List</Text>
 
        <FlatList
          data={student}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 40,
                backgroundColor: "red",
                margin: 5,
              }}
            >
              <Text>
                {item.id} {item.name} {item.age}
              </Text>
            </View>
          )}
        >
        </FlatList>

        {/* <ScrollView>
          {student.map((item) => {
            return (
              <View
                key={item.id}
                style={{ padding: 40, backgroundColor: "lightgray", margin: 5 }}
              >
                <Text>
                  {item.id} {item.name} {item.age}
                </Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
    </View>
  );
}

// CSS in JS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
