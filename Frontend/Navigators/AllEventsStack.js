import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import AllEventsScreen from "../containers/AllEvents/AllEventsScreen";
import SingleEventScreen from "../containers/SingleEvent/SingleEventScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";
import MapScreen from "../containers/Maps/MapScreen";

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
      title: "Single Event",
    },
  },
  MAPS: {
    screen: MapScreen,
    navigationOptions: {
      title: "View Map",
    },
  },
};

const AllEventsStack = createStackNavigator(screens);

export default AllEventsStack;
