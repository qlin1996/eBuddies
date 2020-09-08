import React from "react";
import { View, Button, TextInput, Text, Image, ScrollView } from "react-native";
import styles from "./SignupScreenStyle";
import { Fonts } from "../../themes";
import { connect } from "react-redux";
import { getUsersInfo } from "../../store/users";
import { Appbar, Card } from "react-native-paper";
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      uniqueEmail: true,
    };
  }

  async componentDidMount() {
    await this.props.getUsersInfo();
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email.length && re.test(email)) {
      return true;
    } else return false;
  };

  handleSignup = () => {
    const allEmails = [];
    this.props.users.map((user) => {
      return allEmails.push(user.email);
    });

    if (allEmails.includes(this.state.email)) {
      this.setState({ uniqueEmail: false });
    } else {
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
            uniqueEmail: true,
          });
        };
        setTimeout(waitForSignUp, 1000);
      }
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container1}>
          <Appbar.Header style={styles.appHeader}>
            <Appbar.Content title="Sign up" subtitle="(1/3)" color="white" />
          </Appbar.Header>

          {this.state.uniqueEmail === false && (
            <Text style={{ color: "red" }}>
              There is already an account with this email. Please try to login.
            </Text>
          )}

          <TextInput
            style={styles.textInputName}
            value={this.state.firstName}
            onChangeText={(firstName) => this.setState({ firstName })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="First Name..."
            placeholderTextColor="#4d4a4a"
            keyboardType="name-phone-pad"
          />
          <Image
            style={styles.firstname}
            source={require("../../assets/lastname.png")}
          />
          {this.state.firstName.length === 0 && (
            <Text style={styles.validatorsName}>First Name is Required</Text>
          )}
          <TextInput
            style={styles.textInput}
            value={this.state.lastName}
            onChangeText={(lastName) => this.setState({ lastName })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Last Name..."
            placeholderTextColor="#4d4a4a"
            keyboardType="name-phone-pad"
          />
          <Image
            style={styles.lastname}
            source={require("../../assets/name.png")}
          />
          {this.state.lastName.length === 0 && (
            <Text style={styles.validators}>Last Name is Required</Text>
          )}

          <TextInput
            style={styles.textInputEmail}
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
            source={require("../../assets/emailSignup.png")}
          />
          {!this.validateEmail(this.state.email) && (
            <Text style={styles.validators}>Valid Email is Required</Text>
          )}
          <TextInput
            style={styles.textInputPassword}
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
            source={require("../../assets/passwordSignup.png")}
          />
          {this.state.password.length === 0 && (
            <Text style={styles.validatorsPassword}>Password is Required</Text>
          )}
          <View style={styles.button}>
            <Button
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.normal, textAlign: "center" }}
              title="CONTINUE"
              onPress={this.handleSignup}
            ></Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatch = (dispatch) => ({
  getUsersInfo: () => dispatch(getUsersInfo()),
});

export default connect(mapStateToProps, mapDispatch)(Signup);
