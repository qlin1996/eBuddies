import { React } from "react";
import { View, Text, StyleSheet } from "react-native";
import { materialIcons } from "@expo/vector-icons";
import { Helpers, Metrics, Fonts, Colors } from "../themes";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>PROFILE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 15,
    ...Helpers.crossCenter,
  },
  headerText: {
    color: Colors.blue,
    ...Fonts.h5,
    fontWeight: "bold",
  },
});
