import React from "react";
import { View, Button, TextInput } from "react-native";
import styles from "./SignupTwoScreenStyle";
import { Fonts } from "../../themes";
import { connect } from "react-redux";
import { updateUser, getUserInfo } from "../../store/user";

class SignupTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      streetAddress: "",
      city: "",
      state: "",
      zipCode: 0,
    };
  }
  componentDidMount() {
    this.props.getUser(this.props.user.id);
  }
  handleSignup2 = (event) => {
    event.preventDefault();
    this.props.updateUser(this.props.user.id, this.state);
    this.props.navigation.navigate("INTERESTS");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <View></View>
          <TextInput
            style={{
              ...Fonts.normal,
              height: 50,
              backgroundColor: "rgb(235, 233, 233)",
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(38,153,251,1)",
              marginHorizontal: 40,
              marginBottom: 20,
              color: "rgba(38,153,251,1)",
              paddingHorizontal: 10,
            }}
            value={this.state.streetAddress}
            onChangeText={(streetAddress) => this.setState({ streetAddress })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Street Address"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="name-phone-pad"
          />
          <TextInput
            style={{
              ...Fonts.normal,
              height: 50,
              backgroundColor: "rgb(235, 233, 233)",
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(38,153,251,1)",
              marginHorizontal: 40,
              marginBottom: 20,
              color: "rgba(38,153,251,1)",
              paddingHorizontal: 10,
            }}
            value={this.state.city}
            onChangeText={(city) => this.setState({ city })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="City"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="name-phone-pad"
          />
          <TextInput
            style={{
              ...Fonts.normal,
              height: 50,
              backgroundColor: "rgb(235, 233, 233)",
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(38,153,251,1)",
              marginHorizontal: 40,
              marginBottom: 20,
              color: "rgba(38,153,251,1)",
              paddingHorizontal: 10,
            }}
            value={this.state.state}
            onChangeText={(state) => this.setState({ state })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="State"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="name-phone-pad"
          />
          <TextInput
            style={{
              ...Fonts.normal,
              height: 50,
              backgroundColor: "rgb(235, 233, 233)",
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(38,153,251,1)",
              marginHorizontal: 40,
              marginBottom: 20,
              color: "rgba(38,153,251,1)",
              paddingHorizontal: 10,
            }}
            value={this.state.zipCode}
            onChangeText={(zipCode) => this.setState({ zipCode })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="ZipCode"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="name-phone-pad"
          />
          <View style={styles.button}>
            <Button
              color="white"
              style={{ ...Fonts.normal, textAlign: "center" }}
              title="CONTINUE"
              onPress={this.handleSignup2}
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
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapToState = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, updateData) => dispatch(updateUser(id, updateData)),
  getUser: (userId) => {
    dispatch(getUserInfo(userId));
  },
});

export default connect(mapToState, mapDispatchToProps)(SignupTwo);
