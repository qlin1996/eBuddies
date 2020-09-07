import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import MyEventsScreen from "../containers/MyEvents/MyEventsScreen";
import SingleEventScreen from "../containers/SingleEvent/SingleEventScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const screens = {
  MyEventsScreen: {
    screen: MyEventsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
  SINGLEEVENT: {
    screen: SingleEventScreen,
    navigationOptions: {
      title: "Single Event",
    },
  },
};

const MyEventsStack = createStackNavigator(screens);

export default MyEventsStack;
