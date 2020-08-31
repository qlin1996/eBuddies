import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import AddEventScreen from "../containers/AddEvent/AddEventScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";

const screens = {
  AddEventScreen: {
    screen: AddEventScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
};

const AddEventStack = createStackNavigator(screens);

export default AddEventStack;
