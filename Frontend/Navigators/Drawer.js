import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import AllEventsScreen from "./AllEventsStack";
import UserProfileScreen from "./UserProfileStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
<<<<<<< HEAD
import AddEventScreen from "./AddEventStack";
=======
import MyEventsScreen from "./MyEventsStack";
import ChatScreen from "./ChatStack";
>>>>>>> master

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
<<<<<<< HEAD
  ADDEVENT: {
    screen: AddEventScreen,
=======
  MYEVENTS: {
    screen: MyEventsScreen,
  CHAT: {
    screen: ChatScreen,
>>>>>>> master
  },
});

export default createAppContainer(RootDrawerNavigator);
