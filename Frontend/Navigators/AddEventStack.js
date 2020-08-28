import { createStackNavigator } from "react-navigation-stack";
import AddEventScreen from "../containers/AddEvent/AddEventScreen";

const screens = {
  AddEventScreen: {
    screen: AddEventScreen,
    navigationOptions: {
      title: "ADDEVENT",
    },
  },
};

const AddEventStack = createStackNavigator(screens);

export default AddEventStack;
