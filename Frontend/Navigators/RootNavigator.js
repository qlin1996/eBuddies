import React from "react";
import { connect } from "react-redux";
import UserNavigator from "./UserDrawer";
import GuestNavigator from "./GuestDrawer";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const RootNavigator = createSwitchNavigator({
  GuestNavigator: {
    screen: GuestNavigator,
  },
  UserNavigator: {
    screen: UserNavigator,
  },
});

export default createAppContainer(RootNavigator);
