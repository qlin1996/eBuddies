import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import AllEventsScreen from "../containers/AllEvents/AllEventsScreen";
import SingleEventScreen from "../containers/SingleEvent/SingleEventScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const screens = {
  AllEventsScreen: {
    screen: AllEventsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
  SINGLEEVENT: {
    screen: SingleEventScreen,
    navigationOptions: {
      // headerTitle: () => <Header />,
      title: "Single Event",
    },
  },
};

const AllEventsStack = createStackNavigator(screens);

export default AllEventsStack;
