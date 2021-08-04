import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "./client/app.css";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to KurtPhillips.net</Text>
      <View style={styles.column}>
        <Text>where is this1</Text>
        <Text>where is this3</Text>
      </View>
      <View style={styles.column}>
        <Text>where is this2</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  h1: {
    color: "white",
    fontSize: "50px",
    verticalAlign: "text-top",
    textAlign: "center",
    textShadow: "0px 1px 2px  #000",
  },
  column: {
    flexDirection: "column",
  },
});
