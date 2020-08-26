import { createStackNavigator } from "react-navigation-stack";
import AllEventsScreen from "../containers/AllEvents/AllEventsScreen";

const screens = {
  AllEventsScreen: {
    screen: AllEventsScreen,
    navigationOptions: {
      title: "EVENTS",
    },
  },
};

const AllEventsStack = createStackNavigator(screens);

export default AllEventsStack;
