import { createStackNavigator } from "react-navigation-stack";
import AllEventsScreen from "../containers/AllEvents/AllEventsScreen";
import SingleEventScreen from "../containers/SingleEvent/SingleEventScreen";

const screens = {
  AllEventsScreen: {
    screen: AllEventsScreen,
    navigationOptions: {
      title: "EVENTS",
    },
  },
  SINGLEEVENT: {
    screen: SingleEventScreen,
    navigationOptions: {
      title: "SINGLEEVENT",
    },
  },
};

const AllEventsStack = createStackNavigator(screens);

export default AllEventsStack;
