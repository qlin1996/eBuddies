import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import UserProfileScreen from "./UserProfileStack";
import AllEventsScreen from "./AllEventsStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
import ChatScreen from "./ChatStack";

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

  CHAT: {
    screen: ChatScreen,
  },
});

export default createAppContainer(RootDrawerNavigator);
