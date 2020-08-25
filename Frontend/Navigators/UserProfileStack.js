// import { createStackNavigator } from "react-navigation-stack";
// import UserProfileScreen from "../UserProfile/UserProfileScreen";
// import Header from "./Header";
// import React from "react";

// const screens = {
//   UserProfileScreen: {
//     screen: UserProfileScreen,
//     navigationOptions: {
//       headerTitle: () => <Header />,
//     },
//   },
// };

// const UserProfileStack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerTintColor: "blue",
//     headerStyle: { height: 60 },
//   },
// });

// export default UserProfileStack;

import { createStackNavigator } from "react-navigation-stack";
import UserProfileScreen from "../UserProfile/UserProfileScreen";

const screens = {
  PROFILE: {
    screen: UserProfileScreen,
    title: "PROFILE",
  },
};

const UserProfileStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "blue",
    headerStyle: { backgroundColor: "eee", height: 60 },
  },
});

export default UserProfileStack;
