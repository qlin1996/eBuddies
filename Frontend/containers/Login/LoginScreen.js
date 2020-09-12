// Login Screen.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { connect } from "react-redux";
import styles from "./LoginScreenStyle";
import { login } from "../../store/user";
import { getAllInterests } from "../../store/interest";
import { ApplicationStyles, Helpers, Metrics, Fonts } from "../../themes";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }
  handleLogin = async () => {
    try {
      if (this.state.email.length && this.state.password.length) {
        const result = await this.props.login(
          this.state.email,
          this.state.password
        );

        await this.props.getAllInterests(this.props.user.id);
        this.props.navigation.navigate("RECOMMENDEDEVENTS");
      }
    } catch (error) {
      this.setState({
        error: error,
      });
    }
  };

  handleSignup = () => {
    this.props.navigation.navigate("SIGNUP");
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container1}>
          <Appbar.Header style={styles.appHeader}>
            <Appbar.Content title="Login" color="white" />
          </Appbar.Header>
          {this.state.error ? (
            <Text style={{ color: "red" }}>
              EMAIL AND/OR PASSWORD IS INVALID
            </Text>
          ) : null}

          <TextInput
            style={styles.textInputEmail}
            selectionColor="#428AF8"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Email..."
            placeholderTextColor="#4d4a4a"
            keyboardType="email-address"
          />
          <Image
            style={styles.email}
            source={require("../../assets/email.png")}
          />
          {this.state.email.length === 0 && (
            <Text style={styles.validators}>Email is Required</Text>
          )}

          <TextInput
            style={styles.textInput}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Password..."
            placeholderTextColor="#4d4a4a"
            secureTextEntry
          />
          <Image
            style={styles.password}
            source={require("../../assets/password.png")}
          />
          {this.state.password.length === 0 && (
            <Text style={styles.validators}>Password is Required</Text>
          )}

          <View style={styles.button}>
            <Button
              onPress={this.handleLogin}
              color="rgba(38,153,251,1)"
              title="CONTINUE"
            >
              CONTINUE
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapToState = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
  getAllInterests: (userId) => dispatch(getAllInterests(userId)),
});

export default connect(mapToState, mapDispatchToProps)(Login);
