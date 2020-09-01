import React from "react";
import { View, Button, TextInput, Text } from "react-native";
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

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email.length && re.test(email)) {
      return true;
    } else return false;
  };

  handleSignup = () => {
    if (
      this.state.firstName.length &&
      this.state.lastName.length &&
      this.state.email.length &&
      this.validateEmail(this.state.email) &&
      this.state.password.length
    ) {
      const waitForSignUp = () => {
        this.props.navigation.navigate("ADDRESS", this.state);
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      };
      setTimeout(waitForSignUp, 1000);
    }
  };

  handleLogin = () => {
    this.props.navigation.navigate("LOGIN");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          {/* validations */}
          {this.state.firstName.length === 0 && (
            <Text>First Name is Required</Text>
          )}
          {this.state.lastName.length === 0 && (
            <Text>Last Name is Required</Text>
          )}
          {!this.validateEmail(this.state.email) && (
            <Text>Valid Email is Required</Text>
          )}
          {this.state.password.length === 0 && (
            <Text>Password is Required</Text>
          )}

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

export default Signup;
