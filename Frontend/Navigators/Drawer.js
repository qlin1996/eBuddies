import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import UserProfileScreen from "../containers/UserProfile/UserProfileScreen";
import AllEventsScreen from "../containers/AllEvents/AllEventsScreen";
import LoginScreen from "../containers/Login/LoginScreen";
import SignUpScreen from "./SignUpStack";

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
});

export default createAppContainer(RootDrawerNavigator);
