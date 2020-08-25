import { StatusBar } from "expo-status-bar";
import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, Button } from "react-native";
import Login from "./containers/Login/LoginScreen";
import UserProfileScreen from "./containers/UserProfile/UserProfileScreen";
import Signup from "./containers/Signup/SignupScreen";
import AllEventsScreen from "./containers/AllEvents/AllEventsScreen";
import SingleEventScreen from "./containers/SingleEvent/SingleEventScreen";
import SignUpNavigator from "./navigators/SignUpStack";
import Navigator from "./navigators/Drawer";

export default function App() {
  return (
    <>
      {/* // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text> Hi it's Claire!!!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Login />
    // <Signup />
    <UserProfileScreen />
    // <SignupTwo />
    // <Interests />
    // <SingleEventScreen />
    // <AllEventsScreen />
  // <UserProfileScreen /> */}
      <SignUpNavigator />
      {/* <SignUpStack /> */}
    </>
    // <UserProfileScreen />
    <Navigator />
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
