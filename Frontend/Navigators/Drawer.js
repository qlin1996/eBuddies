import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import UserProfileScreen from "./UserProfileStack";
import AllEventsScreen from "./AllEventsStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
import RecommendedEventsScreen from "./RecommendedEventsStack";
import AddEventScreen from "./AddEventStack";
import ChatScreen from "./ChatStack";
import MyCalendarScreen from "./MyCalendarStack";

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
  RECOMMENDEDEVENTS: {
    screen: RecommendedEventsScreen,
    navigationOptions: {
      title: "Recommended Events",
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
  MYCALENDAR: {
    screen: MyCalendarScreen,
    navigationOptions: {
      title: "My Calendar",
    },
  },
});

export default createAppContainer(RootDrawerNavigator);
