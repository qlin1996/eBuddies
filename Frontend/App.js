import { StatusBar } from "expo-status-bar";
import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, Button } from "react-native";
import Login from "./containers/Login/LoginScreen";
import UserProfileScreen from "./containers/UserProfile/UserProfileScreen";
import Signup from "./containers/Signup/SignupScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text> Hi it's Claire!!!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Login />
    // <Signup />
    <UserProfileScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
