import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import UserProfileScreen from "./UserProfileStack";
import AllEventsScreen from "./AllEventsStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";
<<<<<<< HEAD
import ChatScreen from "./ChatStack";
=======
import InterestsScreen from "./InterestsStack";
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
  CHAT: {
    screen: ChatScreen,
=======
  INTERESTS: {
    screen: InterestsScreen,
>>>>>>> master
  },
});

export default createAppContainer(RootDrawerNavigator);
