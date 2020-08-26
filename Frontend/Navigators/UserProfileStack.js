import { createStackNavigator } from "react-navigation-stack";
import UserProfileScreen from "../containers/UserProfile/UserProfileScreen";

const screens = {
  PROFILE: {
    screen: UserProfileScreen,
  },
};

const UserProfileStack = createStackNavigator(screens);

export default UserProfileStack;
