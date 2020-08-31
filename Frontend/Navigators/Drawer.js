import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import UserProfileScreen from "./UserProfileStack";
import AllEventsScreen from "./AllEventsStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
import MyEventsScreen from "./MyEventsStack";
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
      // headerTitle: () => <Header />,
      title: "User Profile",
    },
  },
  LOGIN: {
    screen: LoginScreen,
    navigationOptions: {
      // headerTitle: () => <Header />,
      title: "Login",
    },
  },
  SIGNUP: {
    screen: SignUpScreen,
    navigationOptions: {
      // headerTitle: () => <Header />,
      title: "Sign Up",
    },
  },
  MYEVENTS: {
    screen: MyEventsScreen,
    navigationOptions: {
      // headerTitle: () => <Header />,
      title: "My Events",
    },
  },
  ADDEVENT: {
    screen: AddEventScreen,
    navigationOptions: {
      // headerTitle: () => <Header />,
      title: "Add Event",
    },
  },
  CHAT: {
    screen: ChatScreen,
    navigationOptions: {
      // headerTitle: () => <Header />,
      title: "Chat",
    },
  },
  MYCALENDAR: {
    screen: MyCalendarScreen,
    navigationOptions: {
      // headerTitle: () => <Header />,
      title: "My Calendar",
    },
  },
});

export default createAppContainer(RootDrawerNavigator);
