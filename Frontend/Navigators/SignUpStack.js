import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SignUpScreen from "../containers/Signup/SignupScreen";
import SignUpTwoScreen from "../containers/SignupTwo/SignupTwoScreen";
import Interests from "../containers/Interests/InterestsScreen";

const signUpScreens = {
  SignUpScreen: {
    screen: SignUpScreen,
  },
  SignUpTwoScreen: {
    screen: SignUpTwoScreen,
  },
  Interests: {
    screen: Interests,
  },
};

const SignUpStack = createStackNavigator(signUpScreens);

export default createAppContainer(SignUpStack);
