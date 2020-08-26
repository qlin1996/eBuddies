import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../containers/Login/LoginScreen";

const screens = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: "LOGIN",
    },
  },
};

const LoginStack = createStackNavigator(screens);

export default LoginStack;
