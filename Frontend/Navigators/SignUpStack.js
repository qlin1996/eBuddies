import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import SignUpScreen from "../containers/Signup/SignupScreen";
import SignUpTwoScreen from "../containers/SignupTwo/SignupTwoScreen";
import Interests from "../containers/Interests/InterestsScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const signUpScreens = {
  SIGNUP: {
    screen: SignUpScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
  ADDRESS: {
    screen: SignUpTwoScreen,
    navigationOptions: {
      title: "Address",
    },
  },
  INTERESTS: {
    screen: Interests,
    navigationOptions: {
      title: "Interests",
    },
  },
};

const SignUpStack = createStackNavigator(signUpScreens);

export default SignUpStack;
