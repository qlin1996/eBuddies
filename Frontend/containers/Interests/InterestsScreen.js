import React from "react";
// import { connect } from "react-redux";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import styles from "./InterestsScreenStyle";
import { Fonts } from "../../themes";

class Interests extends React.Component {
  constructor() {
    super();
    this.state = {
      food: false,
      education: false,
      fitness: false,
      entertainment: false,
    };
  }
  handleLogin = () => {
    this.props.navigation.navigate("LOGIN");
  };

  updateChoice(event) {
    let newState = { ...this.state };
    newState[event] = !newState[event];
    this.setState(newState);
    console.log(event);
  }

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
            <View style={styles.selectInterests}>
              <Button
                color="rgba(38,153,251,1)"
                style={{ ...Fonts.small }}
                title="Food"
                onPress={() => {
                  this.updateChoice("food");
                }}
                selected={this.state.food}
              />
            </View>
            <View style={styles.selectInterests}>
              <Button
                color="rgba(38,153,251,1)"
                style={{ ...Fonts.small }}
                title="Entertainment"
                onPress={() => {
                  this.updateChoice("entertainment");
                }}
                selected={this.state.entertainment}
              />
            </View>
            <View style={styles.selectInterests}>
              <Button
                color="rgba(38,153,251,1)"
                style={{ ...Fonts.small }}
                title="Fitness"
                onPress={() => {
                  this.updateChoice("fitness");
                }}
                selected={this.state.fitness}
              />
            </View>
            <View style={styles.selectInterests}>
              <Button
                color="rgba(38,153,251,1)"
                style={{ ...Fonts.small }}
                title="Education"
                onPress={() => {
                  this.updateChoice("education");
                }}
                selected={this.state.education}
              />
            </View>
          </View>

          <View style={styles.button}>
            <Button
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

export default Interests;
