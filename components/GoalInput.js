import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Qual o objetivo do seu curso!"
          onChangeText={goolInputHandle}
          value={entradaGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandle} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 8,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
