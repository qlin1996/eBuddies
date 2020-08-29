import { createStackNavigator } from "react-navigation-stack";
import UserProfileScreen from "../containers/UserProfile/UserProfileScreen";
import EditUserProfileScreen from "../containers/EditUserProfile/EditUserProfileScreen";
import HostScreen from "../containers/Host/HostScreen";
import AddEventScreen from "../containers/AddEvent/AddEventScreen";

const screens = {
  PROFILE: {
    screen: UserProfileScreen,
  },
  HOST: {
    screen: HostScreen,
  },
  EDIT: {
    screen: EditUserProfileScreen,
  },
  ADD: {
    screen: AddEventScreen,
  },
};

const UserProfileStack = createStackNavigator(screens);

export default UserProfileStack;
