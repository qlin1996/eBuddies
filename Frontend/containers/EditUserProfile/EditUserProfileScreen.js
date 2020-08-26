import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
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
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Update My Profile"
          onPress={() => this.props.navigation.navigate("PROFILE")}
        ></Button>
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
          <TextInput
            value={this.state.firstName}
            style={Style.text}
            placeholder="First Name"
          />
          <TextInput
            style={Style.text}
            value={this.state.lastName}
            placeholder="Last Name"
          />
          <TextInput
            style={Style.text}
            value={this.state.city}
            placeholder="City"
          />
          <TextInput
            style={Style.text}
            value={this.state.state}
            placeholder="State"
          />
          <TextInput
            style={Style.text}
            value={this.state.description}
            placeholder="Description"
          />
        </View>
        <View style={Style.interestsContainer}>
          <Text style={Style.interests}>INTERESTS</Text>
          <TouchableOpacity style={Style.interestContainer}>
            <Button title="Food" />
            <Button title="Entertainment" />
            <Button title="Education" />
            <Button title="Fitness" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(EditUserProfileScreen);
