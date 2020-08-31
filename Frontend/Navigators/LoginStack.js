import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../containers/Login/LoginScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const screens = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
};

const LoginStack = createStackNavigator(screens);

export default LoginStack;
