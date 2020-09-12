import React from "react";
import { View, Image } from "react-native";
import { connect } from "react-redux";
import Style from "./UserProfileScreenStyle";
import { logout } from "../../store/user";
import { getAllInterests } from "../../store/interest";
import { Text, Button, Surface } from "react-native-paper";

class UserProfileScreen extends React.Component {
  async componentDidMount() {
    await this.props.getAllInterests(this.props.user.id);
  }

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
    const uri =
      user.imgUrl ||
      "https://www.actuall.eu/wp-content/uploads/2016/10/cropped-White-box.jpg";

    return (
      <View style={{ flex: 1 }}>
        {/* <View style={Style.imageContainer}></View> */}
        <Surface style={Style.surface}>
          <Image
            style={Style.image}
            source={{
              uri: uri,
            }}
          />
        </Surface>
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
        </View>
        <Surface style={Style.buttons}>
          <Button
            color="rgb(38,153,251)"
            style={Style.button}
            title="EDIT"
            onPress={() => this.props.navigation.navigate("EDIT")}
          >
            Edit
          </Button>

          <Button
            color="rgb(38,153,251)"
            style={Style.button}
            title="LOGOUT"
            onPress={this.handleLogout}
          >
            Logout
          </Button>
        </Surface>
        <View style={Style.logoutbutton}></View>
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
  getAllInterests: (id) => dispatch(getAllInterests(id)),
});

export default connect(mapStateToProps, mapDispatch)(UserProfileScreen);
