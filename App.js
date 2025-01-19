import React from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGols, setCourseGols] = React.useState([]);
  const [modalIsVisible, setModalIsVisible] = React.useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const addGoalHandle = (entradaGoalText) => {
    setCourseGols([
      ...courseGols,
      { text: entradaGoalText, id: courseGols.length },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGols((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandle}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goolContainer}>
          <FlatList
            data={courseGols}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goolContainer: {
    flex: 5,
  },
});
