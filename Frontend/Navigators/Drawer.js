import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import UserProfileScreen from "./UserProfileStack";
import AllEventsScreen from "./AllEventsStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
import MyEventsScreen from "./MyEventsStack";

const RootDrawerNavigator = createDrawerNavigator({
  EVENTS: {
    screen: AllEventsScreen,
  },
  PROFILE: {
    screen: UserProfileScreen,
  },
  LOGIN: {
    screen: LoginScreen,
  },
  SIGNUP: {
    screen: SignUpScreen,
  },
  MYEVENTS: {
    screen: MyEventsScreen,
  },
});

export default createAppContainer(RootDrawerNavigator);
