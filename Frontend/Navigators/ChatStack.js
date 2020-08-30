import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import ChatScreen from "../containers/Chat/ChatScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const screens = {
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
};

const ChatStack = createStackNavigator(screens);

export default ChatStack;
