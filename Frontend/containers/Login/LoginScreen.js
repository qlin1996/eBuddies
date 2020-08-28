import React from "react";
import { connect } from "react-redux";
import { View, Text, Image, Button, TextInput } from "react-native";
// import Style from "../AllEvents/AllEventsScreenStyle";
import styles from "./LoginScreenStyle";
import { auth1 } from "../../store/user";
import { me } from "../../store/user";
import { getAllInterests } from "../../store/interest";
import { ApplicationStyles, Helpers, Metrics, Fonts } from "../../themes";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLogin = async (event) => {
    event.preventDefault();
    await this.props.auth1(this.state.email, this.state.password);
    await this.props.me();
    await this.props.getAllInterests(this.props.user.id);
    this.props.navigation.navigate("MYEVENTS");
  };

  handleSignup = () => {
    this.props.navigation.navigate("SIGNUP");
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          source={require("../../assets/ebuddies.gif")}
          style={styles.logo}
        /> */}
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
              marginBottom: 40,
              color: "rgba(38,153,251,1)",
              paddingHorizontal: 10,
            }}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Enter Password"
            placeholderTextColor="rgba(38,153,251,1)"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button
              onPress={this.handleLogin}
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
              onPress={this.handleSignup}
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
  auth1: (email, password) => dispatch(auth1(email, password)),
  me: () => dispatch(me()),
  getAllInterests: (userId) => dispatch(getAllInterests(userId)),
});

export default connect(mapToState, mapDispatchToProps)(Login);
// export default Login;
