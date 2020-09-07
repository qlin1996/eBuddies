import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import MyCalendarScreen from "../containers/MyCalendar/MyCalendarScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";
import ChatScreen from "../containers/Chat/ChatScreen";
import JoinedEventScreen from "../containers/JoinedEvent/JoinedEventScreen";
import MapScreen from "../containers/Maps/MapScreen";
import AttendeeListScreen from "../containers/AttendeeList/AttendeeListScreen";
import updateEvent from "../containers/UpdateEvent/UpdateEvent";

const screens = {
  MyCalendarScreen: {
    screen: MyCalendarScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
  JOINEDEVENT: {
    screen: JoinedEventScreen,
    navigationOptions: {
      title: "My Events",
    },
  },
  CHAT: {
    screen: ChatScreen,
    navigationOptions: {
      title: "Chat",
    },
    MAPS: {
      screen: MapScreen,
      navigationOptions: {
        title: "View Map",
      },
    },
  },
  ATTENDEES: {
    screen: AttendeeListScreen,
    navigationOptions: {
      title: "Attendee List",
    },
  },
  EDITEVENT: {
    screen: updateEvent,
    navigationOptions: {
      title: "Edit Event",
    },
  },
};

const MyCalendarStack = createStackNavigator(screens);

export default MyCalendarStack;
