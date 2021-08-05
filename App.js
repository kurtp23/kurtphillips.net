import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "./client/app.css";
export default function App() {
  return (
    <View style={styles.containerColumn}>
      <Text style={styles.h1}>Welcome to KurtPhillips.net</Text>
      <View style={styles.containerRow}>
        <View style={styles.column}>
          <View style={[styles.box, { backgroundColor: "red" }]}></View>
        </View>
        <View style={styles.column}>
          <View style={[styles.boxPic, { backgroundColor: "red" }]}></View>
          <View style={[styles.boxPic2, { backgroundColor: "green" }]}></View>
        </View>
        <View style={styles.column}>
          <View style={[styles.box, { backgroundColor: "red" }]}></View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerColumn: {
    flexDirection: "column",
    justifyContent: "center",
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  h1: {
    color: "white",
    fontSize: "50px",
    verticalAlign: "text-top",
    textAlign: "center",
    textShadow: "0px 1px 2px  #000",
  },
  p1: {
    color: "white",
    fontSize: "20px",
    textAlign: "left",
    textShadow: "0px 1px 2px  #000",
  },
  column: {
    flexDirection: "column",
    paddingHorizontal: "25px",
    flexWrap: "wrap",
    paddingVertical: "10px",
  },
  box: {
    height: "400px",
    width: "250px",
  },
  boxPic: {
    height: "500px",
    width: "500px",
    paddingVertical: "10px",
  },
  boxPic2: {
    height: "50px",
    width: "500px",
  },
});
