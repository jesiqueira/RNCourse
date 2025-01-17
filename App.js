import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [courseGols, setCourseGols] = React.useState([]);
  const [entradaGoalText, setEntradaGoalText] = React.useState("");

  const goolInputHandle = (enderedText) => {
    setEntradaGoalText(enderedText);
  };

  const addGoalHandle = () => {
    setCourseGols([
      ...courseGols,
      { text: entradaGoalText, key: courseGols.length},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Qual o objetivo do seu curso!"
          onChangeText={goolInputHandle}
        />
        <Button title="Add Goal" onPress={addGoalHandle} />
      </View>
      <View style={styles.goolContainer}>
        <FlatList
          data={courseGols}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          // keyExtractor={(item, index) => {
          //   return item.id;
          // }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
  },
  goolContainer: {
    flex: 5,
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },

  goalText: {
    color: "white",
  },
});
