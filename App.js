import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGols, setCourseGols] = React.useState([]);

  const addGoalHandle = (entradaGoalText) => {
    setCourseGols([
      ...courseGols,
      { text: entradaGoalText, id: courseGols.length },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGols((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandle} />
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
