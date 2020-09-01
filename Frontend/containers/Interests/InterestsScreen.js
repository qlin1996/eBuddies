import React from "react";
// import { connect } from "react-redux";
import { View, Text, Button, Image, TouchableHighlight } from "react-native";
import styles from "./InterestsScreenStyle";
import { connect } from "react-redux";
import { Fonts } from "../../themes";
import { getUserInfo } from "../../store/user";
import { postNewInterest } from "../../store/interest";
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
    };
  }
  componentDidMount() {
    this.props.getUser(this.props.user.id);
  }
  handleLogin = () => {
    this.props.navigation.navigate("LOGIN");
  };

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

  handleSignup = (event) => {
    let food = "Food";
    let education = "Education";
    let fitness = "Fitness";
    let entertainment = "Entertainment";

    event.preventDefault();
    if (this.state.food === true) {
      this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: food,
      });
    }
    if (this.state.education === true) {
      this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: education,
      });
    }
    if (this.state.fitness === true) {
      this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: fitness,
      });
    }
    if (this.state.entertainment === true) {
      this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: entertainment,
      });
    }
    this.props.navigation.navigate("RECOMMENDEDEVENTS");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/ebuddies.gif")}
          style={styles.logo}
        />
        <View style={styles.background}>
          <View></View>
          <View>
            <Text style={styles.header}>Select Interests</Text>
          </View>
          <View>
            <View
              style={
                this.state.pressStatus1 ? styles.button : styles.buttonPress
              }
            >
              <Button
                color="rgba(38,153,251,1)"
                title="Food"
                onPress={() => {
                  this.updateChoice("food");
                }}
              />
            </View>
            <View
              style={
                this.state.pressStatus2 ? styles.button : styles.buttonPress
              }
            >
              <Button
                color="rgba(38,153,251,1)"
                title="Entertainment"
                onPress={() => {
                  this.updateChoice("entertainment");
                }}
              />
            </View>
            <View
              style={
                this.state.pressStatus3 ? styles.button : styles.buttonPress
              }
            >
              <Button
                color="rgba(38,153,251,1)"
                title="Fitness"
                onPress={() => {
                  this.updateChoice("fitness");
                }}
              />
            </View>
            <View
              style={
                this.state.pressStatus4 ? styles.button : styles.buttonPress
              }
            >
              <Button
                color="rgba(38,153,251,1)"
                title="Education"
                onPress={() => {
                  this.updateChoice("education");
                }}
              />
            </View>
          </View>

          <View style={styles.continueButton}>
            <Button
              onPress={this.handleSignup}
              color="white"
              style={{ ...Fonts.normal, textAlign: "center" }}
              title="CONTINUE"
            >
              CONTINUE
            </Button>
          </View>
          <View style={styles.account}>
            <Button
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="Already have an account?"
            />
          </View>
          <View style={styles.login}>
            <Button
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="LOGIN"
              onPress={this.handleLogin}
            />
          </View>
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
    getUser: (id) => {
      return dispatch(getUserInfo(id));
    },
  };
};

export default connect(mapToState, mapDispatchToProps)(Interests);
