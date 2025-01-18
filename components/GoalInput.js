import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [entradaGoalText, setEntradaGoalText] = React.useState("");

  const goolInputHandle = (enderedText) => {
    setEntradaGoalText(enderedText);
  };

  const addGoalHandle = () => {
    props.onAddGoal(entradaGoalText);
    setEntradaGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Qual o objetivo do seu curso!"
        onChangeText={goolInputHandle}
        value={entradaGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandle} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
