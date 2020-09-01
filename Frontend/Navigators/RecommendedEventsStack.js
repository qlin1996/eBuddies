import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import RecommendedEventsScreen from "../containers/RecommendedEvents/RecommendedEventsScreen";
import SingleEventScreen from "../containers/SingleEvent/SingleEventScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const screens = {
  RECOMMENDEDEVENTS: {
    screen: RecommendedEventsScreen,
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
