import { createStackNavigator } from "react-navigation-stack";
import UserProfileScreen from "../containers/UserProfile/UserProfileScreen";
import EditUserProfileScreen from "../containers/EditUserProfile/EditUserProfileScreen";

const screens = {
  PROFILE: {
    screen: UserProfileScreen,
  },
  EDIT: {
    screen: EditUserProfileScreen,
  },
};

const UserProfileStack = createStackNavigator(screens);

export default UserProfileStack;
