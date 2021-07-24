import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

const Task = ({ Index, Title, handleDelete }) => (
  <View style={styles.item}>
    <View style={styles.itemLeft}>
      <Text style={styles.itemText}>{Title}</Text>
    </View>
    <TouchableOpacity onPress={() => handleDelete(Index)}>
      <Image style={styles.tinyLogo} source={require("../assets/delete.png")} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  itemText: {
    maxWidth: "100%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
});

export default Task;
