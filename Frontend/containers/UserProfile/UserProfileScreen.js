import React from "react";
import { Text, View, Image, Button } from "react-native";
import { connect } from "react-redux";
import Style from "./UserProfileScreenStyle";

class UserProfileScreen extends React.Component {
  render() {
    const user = this.props.user;
    const interests = this.props.interests;

    return (
      <View style={{ flex: 1 }}>
        <View style={Style.imageContainer}>
          <Image
            style={Style.image}
            source={{
              uri: user.imgUrl,
            }}
          />
        </View>
        <View style={Style.profileContainer}>
          <Text style={Style.name}>
            {user.firstName} {}
            {user.lastName}
          </Text>
          <Text style={Style.location}>{user.streetAddress},</Text>
          <Text style={Style.location}>
            {user.city}, {user.state} {user.zipCode}
          </Text>
          <Text style={Style.description}>{user.description}</Text>
        </View>
        <View style={Style.interestsContainer}>
          <Text style={Style.interests}>INTERESTS</Text>
          <View style={Style.interestContainer}>
            {interests.map((interest) => (
              <Text style={Style.interest}>{interest.userInterest}</Text>
            ))}
          </View>
        </View>
        <Button
          title="Edit"
          onPress={() => this.props.navigation.navigate("EDIT")}
        >
          Edit
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  interests: state.interests,
});

export default connect(mapStateToProps)(UserProfileScreen);
