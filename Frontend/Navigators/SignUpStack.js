import { createStackNavigator } from "react-navigation-stack";

import SignUpScreen from "../containers/Signup/SignupScreen";
import SignUpTwoScreen from "../containers/SignupTwo/SignupTwoScreen";
import Interests from "../containers/Interests/InterestsScreen";

const signUpScreens = {
  SIGNUP: {
    screen: SignUpScreen,
  },
  ADDRESS: {
    screen: SignUpTwoScreen,
  },
  INTERESTS: {
    screen: Interests,
  },
};

const SignUpStack = createStackNavigator(signUpScreens);

export default SignUpStack;
