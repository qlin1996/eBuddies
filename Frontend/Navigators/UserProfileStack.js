import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import UserProfileScreen from "../containers/UserProfile/UserProfileScreen";
import EditUserProfileScreen from "../containers/EditUserProfile/EditUserProfileScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const screens = {
  PROFILE: {
    screen: UserProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
  EDIT: {
    screen: EditUserProfileScreen,
    navigationOptions: {
      title: "Edit Profile",
    },
  },
};

const UserProfileStack = createStackNavigator(screens);

export default UserProfileStack;
