import { createStackNavigator } from "react-navigation-stack";
import { Colors, Fonts } from "../themes";

import SignUpScreen from "../containers/Signup/SignupScreen";
import SignUpTwoScreen from "../containers/SignupTwo/SignupTwoScreen";
import Interests from "../containers/Interests/InterestsScreen";

const signUpScreens = {
  SIGNUP: {
    screen: SignUpScreen,
    navigationOptions: {
      title: "SIGNUP",
    },
  },
  ADDRESS: {
    screen: SignUpTwoScreen,
    navigationOptions: {
      title: "ADDRESS",
    },
  },
  INTERESTS: {
    screen: Interests,
    navigationOptions: {
      title: "INTERESTS",
    },
  },
};

const SignUpStack = createStackNavigator(signUpScreens);

export default SignUpStack;
