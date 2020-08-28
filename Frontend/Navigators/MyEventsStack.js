import { createStackNavigator } from "react-navigation-stack";
import MyEventsScreen from "../containers/MyEvents/MyEventsScreen";
import SingleEventScreen from "../containers/SingleEvent/SingleEventScreen";

const screens = {
  MyEventsScreen: {
    screen: MyEventsScreen,
    navigationOptions: {
      title: "MYEVENTS",
    },
  },
  SINGLEEVENT: {
    screen: SingleEventScreen,
    navigationOptions: {
      title: "SINGLEEVENT",
    },
  },
};

const MyEventsStack = createStackNavigator(screens);

export default MyEventsStack;
