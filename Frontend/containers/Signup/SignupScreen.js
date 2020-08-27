import React from "react";
import { View, Button, TextInput, Image } from "react-native";
import { auth2 } from "../../store/user";
import { connect } from "react-redux";
import styles from "./SignupScreenStyle";
import { Fonts } from "../../themes";
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleSignup = () => {
    this.props.auth2(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password
    );
    const waitForSignUp = () => {
      this.props.navigation.navigate("ADDRESS");
    };
    setTimeout(waitForSignUp, 1500);
  };

  // handleLogin = () => {
  //        this.props.navigation.navigate("ADDRESS");

  // }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/ebuddies.gif")}
          style={styles.logo}
        />
        <View style={styles.background}>
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
            value={this.state.firstName}
            onChangeText={(firstName) => this.setState({ firstName })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="John"
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
            value={this.state.lastName}
            onChangeText={(lastName) => this.setState({ lastName })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Doe"
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
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="jdoe@gmail.com"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="email-address"
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
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Create Password"
            placeholderTextColor="rgba(38,153,251,1)"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button
              color="white"
              style={{ ...Fonts.normal, textAlign: "center" }}
              title="CONTINUE"
              onPress={this.handleSignup}
            >
              CONTINUE
            </Button>
            {/* <Button
              color="blue"
              style={{ ...Fonts.normal, textAlign: "center" }}
              title="CONTINUE"
              onPress={this.handlePress}
            >
              CONTINUE2
            </Button> */}
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
});

const mapDispatchToProps = (dispatch) => ({
  auth2: (firstName, lastName, email, password) =>
    dispatch(auth2(firstName, lastName, email, password)),
});

export default connect(mapToState, mapDispatchToProps)(Signup);
