import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./containers/Login/LoginScreen";
import Signup from "./containers/Signup/SignupScreen";
import SignupTwo from "./containers/SignupTwo/SignupTwoScreen";
import Interests from "./containers/Interests/InterestsScreen";
import UserProfileScreen from "./containers/UserProfile/UserProfileScreen";
import AllEventsScreen from "./containers/AllEvents/AllEventsScreen";
import SingleEventScreen from "./containers/SingleEvent/SingleEventScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text> Hi it's Claire!!!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Login />
    // <Signup />
    // <SignupTwo />
    // <Interests />
    <SingleEventScreen />
    /* <AllEventsScreen/> */
    // <UserProfileScreen />
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
