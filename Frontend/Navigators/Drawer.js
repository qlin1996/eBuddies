import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import UserProfileScreen from "./UserProfileStack";
import AllEventsScreen from "./AllEventsStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
import MyEventsScreen from "./MyEventsStack";
import AddEventScreen from "./AddEventStack";
import ChatScreen from "./ChatStack";

const RootDrawerNavigator = createDrawerNavigator({
  EVENTS: {
    screen: AllEventsScreen,
    navigationOptions: {
      title: "Events",
    },
  },
  PROFILE: {
    screen: UserProfileScreen,
    navigationOptions: {
      title: "User Profile",
    },
  },
  LOGIN: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login",
    },
  },
  SIGNUP: {
    screen: SignUpScreen,
    navigationOptions: {
      title: "Sign Up",
    },
  },
  MYEVENTS: {
    screen: MyEventsScreen,
    navigationOptions: {
      title: "My Events",
    },
  },
  ADDEVENT: {
    screen: AddEventScreen,
    navigationOptions: {
      title: "Add Event",
    },
  },
  CHAT: {
    screen: ChatScreen,
    navigationOptions: {
      title: "Chat",
    },
  },
});

export default createAppContainer(RootDrawerNavigator);
