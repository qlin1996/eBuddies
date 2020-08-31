import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import MyCalendarScreen from "../containers/MyCalendar/MyCalendarScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const screens = {
  MyCalendarScreen: {
    screen: MyCalendarScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
};

const MyCalendarStack = createStackNavigator(screens);

export default MyCalendarStack;
