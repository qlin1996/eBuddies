import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import AllEventsScreen from "./AllEventsStack";
import UserProfileScreen from "./UserProfileStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
import AddEventScreen from "./AddEventStack";

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
  ADDEVENT: {
    screen: AddEventScreen,
  },
});

export default createAppContainer(RootDrawerNavigator);
