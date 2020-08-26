import React from "react";
import { View, Button, TextInput } from "react-native";
import styles from "./SignupScreenStyle";
import { Fonts } from "../../themes";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  pressHandler = () => {
    this.props.navigation.navigate("ADDRESS");
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
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder="John Doe"
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
            onChangeText={(email) => this.setState({ email })}
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
              marginBottom: 20,
              color: "rgba(38,153,251,1)",
              paddingHorizontal: 10,
            }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            placeholder="Create Password"
            placeholderTextColor="rgba(38,153,251,1)"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button
              color="white"
              style={{ ...Fonts.normal, textAlign: "center" }}
              title="CONTINUE"
              onPress={this.pressHandler}
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

export default Signup;
