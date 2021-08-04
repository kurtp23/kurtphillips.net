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
          <Text style={styles.p1}>
            IM not exactly sure the purpose of this website, but hope to use it to improve apon my
            skills, or just record things that happen in my life.
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.p1}>this is some other text that i also dont have an idea for</Text>
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
    paddingHorizontal: "100px",
    flexWrap: "wrap",
  },
});
