import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import AllEventsScreen from "./AllEventsStack";
import LoginScreen from "./LoginStack";
import SignUpScreen from "./SignUpStack";

const GuestDrawerNavigator = createDrawerNavigator({
  EVENTS: {
    screen: AllEventsScreen,
    navigationOptions: {
      title: "All Events",
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
});

export default createAppContainer(GuestDrawerNavigator);
