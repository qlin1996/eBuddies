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
import { updateUser } from "../../store/user";
import { deleteAllInterests, postNewInterest } from "../../store/interest";
import { Metrics, Fonts, Colors } from "../../themes";

class EditUserProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zipCode: "",
      description: "",
      Food: false,
      Education: false,
      Fitness: false,
      Entertainment: false,
      imgUrl: "",
      height: 0,
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
      zipCode: this.props.user.zipCode,
      description: this.props.user.description,
      Food: keys.includes("Food"),
      Education: keys.includes("Education"),
      Fitness: keys.includes("Fitness"),
      Entertainment: keys.includes("Entertainment"),
      imgUrl: this.props.user.imgUrl,
    });
  }

  isValidUSZip = (zipCode) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  };

  updateChoice = (interest) => {
    let newState = { ...this.state };
    newState[interest] = !newState[interest];
    this.setState(newState);
  };

  selectPicture = async () => {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: 1,
      });
      this.setState({ imgUrl: uri });
      // console.log("IAMGE URI", uri);
    } catch (error) {
      console.log(error);
    }
  };

  takePicture = async () => {
    try {
      await Permissions.askAsync(Permissions.CAMERA);
      const { cancelled, uri } = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: 1,
      });
      this.setState({ imgUrl: uri });
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdate = async () => {
    if (
      this.state.firstName.length &&
      this.state.lastName.length &&
      this.state.city.length &&
      this.state.state.length &&
      this.isValidUSZip(this.state.zipCode)
    ) {
      await this.props.updateUser(this.props.user.id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        description: this.state.description,
        imgUrl: this.state.imgUrl,
      });
      await this.props.deleteAllInterests(this.props.user.id);
      if (this.state.Food === true) {
        await this.props.postNewInterest({
          userId: this.props.user.id,
          userInterest: "Food",
        });
      }
      if (this.state.Education === true) {
        await this.props.postNewInterest({
          userId: this.props.user.id,
          userInterest: "Education",
        });
      }
      if (this.state.Fitness === true) {
        await this.props.postNewInterest({
          userId: this.props.user.id,
          userInterest: "Fitness",
        });
      }
      if (this.state.Entertainment === true) {
        await this.props.postNewInterest({
          userId: this.props.user.id,
          userInterest: "Entertainment",
        });
      }
      this.props.navigation.navigate("PROFILE");
    }
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
                uri: this.state.imgUrl,
              }}
            />
            <Button title="Select Picture" onPress={this.selectPicture} />
            <Button title="Take Picture" onPress={this.takePicture} />
          </View>
          <View style={Style.profileContainer}>
            {this.state.firstName.length === 0 && (
              <Text style={{ color: "red" }}>First Name is Required</Text>
            )}
            <Text>First Name</Text>
            <TextInput
              value={this.state.firstName}
              style={Style.text}
              onChangeText={(firstName) => this.setState({ firstName })}
              ref={(input) => {
                this.textInput = input;
              }}
            />

            {this.state.lastName.length === 0 && (
              <Text style={{ color: "red" }}>Last Name is Required</Text>
            )}
            <Text>Last Name</Text>
            <TextInput
              style={Style.text}
              value={this.state.lastName}
              onChangeText={(lastName) => this.setState({ lastName })}
              ref={(input) => {
                this.textInput = input;
              }}
            />

            {this.state.city.length === 0 && (
              <Text style={{ color: "red" }}>City is Required</Text>
            )}
            <Text>City</Text>
            <TextInput
              style={Style.text}
              value={this.state.city}
              onChangeText={(city) => this.setState({ city })}
              ref={(input) => {
                this.textInput = input;
              }}
            />

            {this.state.state.length === 0 && (
              <Text style={{ color: "red" }}>State is Required</Text>
            )}
            <Text>State</Text>
            <TextInput
              style={Style.text}
              value={this.state.state}
              onChangeText={(state) => this.setState({ state })}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            {!this.isValidUSZip(this.state.zipCode) && (
              <Text style={{ color: "red" }}>
                Valid US Zip Code is Required
              </Text>
            )}
            <Text>Zip Code</Text>
            <TextInput
              style={Style.text}
              value={this.state.zipCode}
              onChangeText={(zipCode) => this.setState({ zipCode })}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            <Text>Description</Text>
            <TextInput
              multiline={true}
              style={{
                height: Math.max(35, this.state.height),
                ...Fonts.normal,
                ...Metrics.bottomMargin,
                color: Colors.blue,
              }}
              onContentSizeChange={(event) => {
                this.setState({ height: event.nativeEvent.contentSize.height });
              }}
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
            onPress={this.handleUpdate}
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

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, updateData) => {
    return dispatch(updateUser(id, updateData));
  },
  deleteAllInterests: (userId) => {
    return dispatch(deleteAllInterests(userId));
  },
  postNewInterest: (interestObj) => {
    return dispatch(postNewInterest(interestObj));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfileScreen);
