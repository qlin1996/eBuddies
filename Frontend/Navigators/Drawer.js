import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import AllEventsScreen from "./AllEventsStack";
import UserProfileScreen from "./UserProfileStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
import MyEventsScreen from "./MyEventsStack";
import AddEventScreen from "./AddEventStack";
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
  MYEVENTS: {
    screen: MyEventsScreen,
  },
  ADDEVENT: {
    screen: AddEventScreen,
  },
  CHAT: {
    screen: ChatScreen,
  },
});

export default createAppContainer(RootDrawerNavigator);
