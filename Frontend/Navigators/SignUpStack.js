import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SignUpScreen from "../containers/Signup/SignupScreen";
import SignUpTwoScreen from "../containers/SignupTwo/SignupTwoScreen";
import InterestsScreen from "../containers/Interests/InterestsScreen";

// v4
const signUpScreens = {
  SignUpScreen: {
    screen: SignUpScreen,
  },
  SignUpTwoScreen: {
    screen: SignUpTwoScreen,
  },
  InterestsScreen: {
    screen: InterestsScreen,
  },
};

const SignUpStack = createStackNavigator(signUpScreens);

export default createAppContainer(SignUpStack);
