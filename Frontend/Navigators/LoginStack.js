import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../Login/LoginScreen";

const screens = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: "LOGIN",
    },
  },
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "blue",
    headerStyle: { height: 60 },
  },
});

export default LoginStack;
