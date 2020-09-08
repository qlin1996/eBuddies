import React from "react";
import { View, Button, Text, Image, TouchableHighlight } from "react-native";
import styles from "./InterestsScreenStyle";
import { connect } from "react-redux";
import { Fonts } from "../../themes";
import { auth2 } from "../../store/user";
import { postNewInterest } from "../../store/interest";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { Appbar, Card, Surface } from "react-native-paper";

class Interests extends React.Component {
  constructor() {
    super();
    this.state = {
      food: false,
      education: false,
      fitness: false,
      entertainment: false,
      pressStatus1: false,
      pressStatus2: false,
      pressStatus3: false,
      pressStatus4: false,
      description: "",
      imgUrl: "",
      city: "",
      state: "",
      zipCode: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      pushToken: "",
    };
  }

  componentDidMount() {
    this.setState({
      description: this.props.navigation.getParam("description"),
      imgUrl: this.props.navigation.getParam("imgUrl"),
      city: this.props.navigation.getParam("city"),
      state: this.props.navigation.getParam("state"),
      zipCode: this.props.navigation.getParam("zipCode"),
      firstName: this.props.navigation.getParam("firstName"),
      lastName: this.props.navigation.getParam("lastName"),
      email: this.props.navigation.getParam("email"),
      password: this.props.navigation.getParam("password"),
    });
  }

  updateChoice = (event) => {
    if (event === "food") {
      this.state.pressStatus1 = !this.state.pressStatus1;
    }
    if (event === "entertainment") {
      this.state.pressStatus2 = !this.state.pressStatus2;
    }
    if (event === "fitness") {
      this.state.pressStatus3 = !this.state.pressStatus3;
    }
    if (event === "education") {
      this.state.pressStatus4 = !this.state.pressStatus4;
    }
    let newState = { ...this.state };
    newState[event] = !newState[event];
    this.setState(newState);
  };

  askPermissions = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Please allow notifications in your settings");
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      this.setState({
        pushToken: token.data,
      });
    } else {
      alert("Must use physical device for Push Notifications");
    }
  };
  handleSignup = async () => {
    await this.askPermissions();
    await this.props.auth2(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.description,
      this.state.imgUrl,
      this.state.city,
      this.state.state,
      this.state.zipCode,
      this.state.pushToken
    );
    if (this.state.food === true) {
      await this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: "Food",
      });
    }
    if (this.state.education === true) {
      await this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: "Education",
      });
    }
    if (this.state.fitness === true) {
      await this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: "Fitness",
      });
    }
    if (this.state.entertainment === true) {
      await this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: "Entertainment",
      });
    }
    await this.props.navigation.navigate("RECOMMENDEDEVENTS");
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.appHeader}>
          <Appbar.Content title="Sign up" subtitle="(3/3)" color="white" />
        </Appbar.Header>

        <View style={styles.card}>
          <View
            style={this.state.pressStatus1 ? styles.button : styles.buttonPress}
          >
            <Surface style={styles.surface}>
              <Button
                color="rgba(38,153,251,1)"
                title="Food"
                onPress={() => {
                  this.updateChoice("food");
                }}
              />
            </Surface>
          </View>
          <View
            style={this.state.pressStatus2 ? styles.button : styles.buttonPress}
          >
            <Surface style={styles.surface}>
              <Button
                color="rgba(38,153,251,1)"
                title="Entertainment"
                onPress={() => {
                  this.updateChoice("entertainment");
                }}
              />
            </Surface>
          </View>
          <View
            style={this.state.pressStatus3 ? styles.button : styles.buttonPress}
          >
            <Surface style={styles.surface}>
              <Button
                color="rgba(38,153,251,1)"
                title="Fitness"
                onPress={() => {
                  this.updateChoice("fitness");
                }}
              />
            </Surface>
          </View>
          <View
            style={this.state.pressStatus4 ? styles.button : styles.buttonPress}
          >
            <Surface style={styles.surface}>
              <Button
                color="rgba(38,153,251,1)"
                title="Education"
                onPress={() => {
                  this.updateChoice("education");
                }}
              />
            </Surface>
          </View>
        </View>
        <View style={styles.actions}>
          <Button onPress={this.handleSignup} title="CONTINUE" />
        </View>
      </View>
    );
  }
}
const mapToState = (state) => ({
  user: state.user,
  interests: state.interests,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postNewInterest: (id, updateData) => {
      return dispatch(postNewInterest(id, updateData));
    },
    auth2: (
      firstName,
      lastName,
      email,
      password,
      description,
      imgUrl,
      city,
      state,
      zipCode,
      pushToken
    ) => {
      return dispatch(
        auth2(
          firstName,
          lastName,
          email,
          password,
          description,
          imgUrl,
          city,
          state,
          zipCode,
          pushToken
        )
      );
    },
  };
};

export default connect(mapToState, mapDispatchToProps)(Interests);
