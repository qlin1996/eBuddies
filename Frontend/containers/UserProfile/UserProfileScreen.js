import React from "react";
import axios from "axios";
import { Text, View, Image, Button } from "react-native";
import { connect } from "react-redux";
import Style from "./UserProfileScreenStyle";

class UserProfileScreen extends React.Component {
  async componentDidMount() {}

  render() {
    const user = this.props.user;

    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Edit"
          onPress={() => this.props.navigation.navigate("EDIT")}
        >
          Edit
        </Button>
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
          <Text style={Style.name}>
            {user.firstName} {}
            {user.lastName}
          </Text>
          <Text style={Style.location}>
            {user.city}, {user.state}
          </Text>
          <Text style={Style.description}>{user.description}</Text>
        </View>
        <View style={Style.interestsContainer}>
          <Text style={Style.interests}>INTERESTS</Text>
          <View style={Style.interestContainer}>
            <Text style={Style.interest}>Food</Text>
            <Text style={Style.interest}>Fitness</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserProfileScreen);
