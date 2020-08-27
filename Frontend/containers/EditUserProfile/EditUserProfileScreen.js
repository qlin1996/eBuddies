import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import Style from "./EditUserProfileScreenStyle";

class EditUserProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      description: "",
      food: false,
      education: false,
      fitness: false,
      entertainment: false,
    };
  }

  async componentDidMount() {
    let keys = [];
    this.props.interests.forEach((interest) => {
      keys.push(interest.userInterest);
    });

    this.setState({
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      city: this.props.user.city,
      state: this.props.user.state,
      description: this.props.user.description,
      food: keys.includes("Food"),
      education: keys.includes("Education"),
      fitness: keys.includes("Fitness"),
      entertainment: keys.includes("Entertainment"),
    });
  }

  updateChoice = (interest) => {
    console.log("IT WENT HEREEEEE");
    let newState = { ...this.state };
    newState[interest] = !newState[interest];
    this.setState(newState);
  };

  render() {
    console.log("STATE", this.state);
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={Style.imageContainer}>
            <Image
              style={Style.image}
              source={{
                uri:
                  "https://icons-for-free.com/iconfiles/png/512/avatar+human+male+man+men+people+person+profile+user+users-1320196163635839021.png",
              }}
            />
          </View>
          <View style={Style.profileContainer}>
            <Text>First Name</Text>
            <TextInput
              value={this.state.firstName}
              style={Style.text}
              onChangeText={(firstName) => this.setState({ firstName })}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            <Text>Last Name</Text>
            <TextInput
              style={Style.text}
              value={this.state.lastName}
              onChangeText={(lastName) => this.setState({ lastName })}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            <Text>City</Text>
            <TextInput
              style={Style.text}
              value={this.state.city}
              onChangeText={(city) => this.setState({ city })}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            <Text>State</Text>
            <TextInput
              style={Style.text}
              value={this.state.state}
              onChangeText={(state) => this.setState({ state })}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            <Text>Description</Text>
            <TextInput
              style={Style.text}
              value={this.state.description}
              onChangeText={(description) => this.setState({ description })}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            <Text>INTERESTS</Text>
            <View style={Style.interestContainer}></View>
            <TouchableOpacity
              onPress={() => {
                this.updateChoice("Food");
              }}
            >
              <Text style={Style.interest}>Food</Text>
            </TouchableOpacity>

            <Text style={Style.interest}>Entertainment</Text>
            <Text style={Style.interest}>Education</Text>
            <Text style={Style.interest}>Fitness</Text>
          </View>

          <Button
            title="Update My Profile"
            onPress={() => this.props.navigation.navigate("PROFILE")}
          ></Button>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  interests: state.interests,
});

export default connect(mapStateToProps)(EditUserProfileScreen);
