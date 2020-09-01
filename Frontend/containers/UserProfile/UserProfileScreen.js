import React from "react";
import { Text, View, Image, Button } from "react-native";
import { connect } from "react-redux";
import Style from "./UserProfileScreenStyle";
import { logout } from "../../store/user";

class UserProfileScreen extends React.Component {
  handleLogout = async () => {
    try {
      await this.props.logout();
      this.props.navigation.navigate("LOGIN");
    } catch (error) {
      console.log(error);
    }
  };

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
          <Text style={Style.location}>
            {user.city}, {user.state} {user.zipCode}
          </Text>
          <Text style={Style.description}>{user.description}</Text>
        </View>
        <View style={Style.interestsContainer}>
          <Text style={Style.interests}>INTERESTS</Text>
          <View style={Style.interestContainer}>
            {interests.map((interest) => (
              <Text key={interest.id} style={Style.interest}>
                {interest.userInterest}
              </Text>
            ))}
          </View>
          {/* <Button
            title="HOST"
            onPress={() => this.props.navigation.navigate("HOST")}
          >
            HOSTED EVENTS
          </Button> */}
        </View>
        <View style={Style.edit}>
          <Button
            title="EDIT"
            onPress={() => this.props.navigation.navigate("EDIT")}
          >
            Edit
          </Button>
        </View>
        <View style={Style.separator}>
          <Text style={{ fontSize: 36, color: "blue" }}>⟶</Text>
        </View>
        <View style={Style.logoutbutton}>
          <Button title="LOGOUT" onPress={this.handleLogout}>
            Logout
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  interests: state.interests,
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatch)(UserProfileScreen);
