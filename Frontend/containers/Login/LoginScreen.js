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

import { connect } from "react-redux";
import styles from "./LoginScreenStyle";
import { auth1 } from "../../store/user";
import { me } from "../../store/user";
import { getAllInterests } from "../../store/interest";
import { ApplicationStyles, Helpers, Metrics, Fonts } from "../../themes";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
  "723742203171-lvu807oei4vau5kbp3cisp8b8gb0lnmb.apps.googleusercontent.com";
console.disableYellowBox = true;

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
        const result = await this.props.auth1(
          this.state.email,
          this.state.password
        );

        await this.props.me();
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

  logInFb = async () => {
    if (this.state.email.length && this.state.password.length) {
      try {
        await Facebook.initializeAsync("1194639730905892");
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
        if (type === "success") {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`
          );
          alert("Logged in!", `Hi ${(await response.json()).name}!`);
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    }
  };

  signInWithGoogle = async () => {
    if (this.state.email.length && this.state.password.length) {
      try {
        const result = await Google.logInAsync({
          iosClientId: IOS_CLIENT_ID,
          scopes: ["profile", "email"],
        });
        if (result.type === "success") {
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }
  };
  verifyCallback = (response) => console.log(response);
  expiredCallback = () => {
    console.log("hi");
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.containerBox}>
            <Text style={styles.loginBox}>Login</Text>
            <View>
              <TouchableOpacity onPress={() => this.signInWithGoogle()}>
                <Image
                  source={require("../../assets/google.png")}
                  style={styles.logo1}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={this.logInFb}>
                <Image
                  source={require("../../assets/fb.png")}
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: -32.5,
                    marginLeft: 139,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            {this.state.error ? (
              <Text>EMAIL AND/OR PASSWORD IS INVALID</Text>
            ) : null}

            <View>
              {this.state.email.length === 0 && (
                <Text style={styles.validators}>Email is Required</Text>
              )}
              <TextInput
                style={styles.textInput}
                selectionColor="#428AF8"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                ref={(input) => {
                  this.textInput = input;
                }}
                returnKeyType="go"
                placeholder="Email..."
                placeholderTextColor="#BEBEBE"
                keyboardType="email-address"
              />
              <Image
                style={styles.email}
                source={require("../../assets/email.png")}
              />
              {this.state.password.length === 0 && (
                <Text style={styles.validators}>Password is Required</Text>
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
                placeholderTextColor="#BEBEBE"
                secureTextEntry
              />
              <Image
                style={styles.password}
                source={require("../../assets/password.png")}
              />
              <View style={styles.button}>
                <Button
                  onPress={this.handleLogin}
                  color="rgba(38,153,251,1)"
                  title="CONTINUE"
                >
                  CONTINUE
                </Button>
              </View>
              <View style={styles.account}></View>
            </View>
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
  auth1: (email, password) => dispatch(auth1(email, password)),
  me: () => dispatch(me()),
  getAllInterests: (userId) => dispatch(getAllInterests(userId)),
});

export default connect(mapToState, mapDispatchToProps)(Login);
