import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import MyCalendarScreen from "../containers/MyCalendar/MyCalendarScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";
import SingleEventScreen from "../containers/SingleEvent/SingleEventScreen";

const screens = {
  MyCalendarScreen: {
    screen: MyCalendarScreen,
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

const MyCalendarStack = createStackNavigator(screens);

export default MyCalendarStack;
