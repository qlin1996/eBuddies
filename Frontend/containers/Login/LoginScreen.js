import React from "react";
// import { connect } from "react-redux";
import { View, Text, Image, Button, TextInput } from "react-native";
// import Style from "../AllEvents/AllEventsScreenStyle";
import styles from "./LoginScreenStyle";
import { ApplicationStyles, Helpers, Metrics, Fonts } from "../../themes";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <TextInput
            style={{
              ...Fonts.normal,
              height: 50,
              backgroundColor: "rgb(235, 233, 233)",
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(38,153,251,1)",
              marginHorizontal: 40,
              marginBottom: 40,
              color: "rgba(38,153,251,1)",
              paddingHorizontal: 10,
            }}
            value={this.state.email}
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
              marginBottom: 40,
              color: "rgba(38,153,251,1)",
              paddingHorizontal: 10,
            }}
            value={this.state.password}
            placeholder="Enter Password"
            placeholderTextColor="rgba(38,153,251,1)"
            secureTextEntry
          />
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
              title="Don't have an account?"
            />
          </View>
          <View style={styles.login}>
            <Button
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="SIGN UP"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
