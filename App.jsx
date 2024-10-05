/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Do laundry", completed: true },
    { id: 2, text: "Go to gym", completed: false },
    { id: 3, text: "Walk dog", completed: true },
  ]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: task, completed: false },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.center}>
        <View style={styles.todoItem}>
          <ToDoList tasks={tasks} />
        </View>
        <View style={styles.todoItem}>
          <ToDoForm addTask={addTask} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  todoItem: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default App;
