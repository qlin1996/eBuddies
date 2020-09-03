import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import MapScreen from "../containers/Maps/MapScreen";

const screens = {
  MAPS: {
    screen: MapScreen,
    navigationOptions: {
      title: "Maps",
    },
  },
};

const MyMapStack = createStackNavigator(screens);

export default MyMapStack;
