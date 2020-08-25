import { createStackNavigator } from "react-navigation-stack";
import AllEventsScreen from "../AllEvents/AllEventsScreen";

const screens = {
  AllEventsScreen: {
    screen: AllEventsScreen,
    navigationOptions: {
      title: "EVENTS",
    },
  },
};

const AllEventsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "blue",
    headerStyle: { height: 60 },
  },
});

export default AllEventsStack;
