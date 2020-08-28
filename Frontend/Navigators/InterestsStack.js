import { createStackNavigator } from "react-navigation-stack";
import InterestsScreen from "../containers/Interests/InterestsScreen";

const screens = {
  InterestsScreen: {
    screen: InterestsScreen,
    navigationOptions: {
      title: "INTERESTS",
    },
  },
};

const InterestsStack = createStackNavigator(screens);

export default InterestsStack;
