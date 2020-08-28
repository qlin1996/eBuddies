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
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

class EditUserProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      description: "",
      Food: false,
      Education: false,
      Fitness: false,
      Entertainment: false,
      image: null,
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
      Food: keys.includes("Food"),
      Education: keys.includes("Education"),
      Fitness: keys.includes("Fitness"),
      Entertainment: keys.includes("Entertainment"),
      image: this.props.user.imgUrl,
    });
  }

  updateChoice = (interest) => {
    let newState = { ...this.state };
    newState[interest] = !newState[interest];
    this.setState(newState);
  };

  pickImage = async () => {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: 1,
      });
      this.setState({ image: uri });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={Style.imageContainer}>
            <Image
              style={Style.image}
              source={{
                uri: this.state.image,
              }}
            />
            <Button title="Choose Image" onPress={this.pickImage} />
            {/* <Image
              style={Style.image}
              source={{
                uri:
                  "https://icons-for-free.com/iconfiles/png/512/avatar+human+male+man+men+people+person+profile+user+users-1320196163635839021.png",
              }}
            /> */}
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
            <View style={Style.interestContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.updateChoice("Food");
                }}
              >
                <Text
                  style={
                    this.state.Food ? Style.interestSelected : Style.interest
                  }
                >
                  Food
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.updateChoice("Entertainment");
                }}
              >
                <Text
                  style={
                    this.state.Entertainment
                      ? Style.interestSelected
                      : Style.interest
                  }
                >
                  Entertainment
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.updateChoice("Education");
                }}
              >
                <Text
                  style={
                    this.state.Education
                      ? Style.interestSelected
                      : Style.interest
                  }
                >
                  Education
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.updateChoice("Fitness");
                }}
              >
                <Text
                  style={
                    this.state.Fitness ? Style.interestSelected : Style.interest
                  }
                >
                  Fitness
                </Text>
              </TouchableOpacity>
            </View>
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
