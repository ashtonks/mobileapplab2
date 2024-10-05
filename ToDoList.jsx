import React from "react";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <Pressable key={task.id}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});
