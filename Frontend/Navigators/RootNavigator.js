import React from "react";
import { connect } from "react-redux";
import UserNavigator from "./UserDrawer";
import GuestNavigator from "./GuestDrawer";

class RootNavigator extends React.Component {
  render() {
    return <>{this.props.user.id ? <UserNavigator /> : <GuestNavigator />}</>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(RootNavigator);
