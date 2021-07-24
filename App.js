import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/task";

export default function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    const Task = {
      title: task,
      completed: false,
    };

    setTasks([...tasks, Task]);
    setTask(null);
  };

  const deleteTask = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {tasks.length ? (
            <FlatList
              keyExtractor={(item, index) => item.title}
              data={tasks}
              renderItem={({ item, index }) => {
                return (
                  <Task
                    Index={index}
                    Title={item.title}
                    handleDelete={deleteTask}
                  />
                );
              }}
            />
          ) : (
            <Text style={styles.emptyText}>Todo List is empty.</Text>
          )}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  emptyText: {
    fontSize: 18,
    alignSelf: "center",
    lineHeight: 550,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 80,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
