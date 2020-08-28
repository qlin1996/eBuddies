import { createStackNavigator } from "react-navigation-stack";
import ChatScreen from "../containers/Chat/ChatScreen";

const screens = {
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      title: "CHAT",
    },
  },
};

const ChatStack = createStackNavigator(screens);

export default ChatStack;
