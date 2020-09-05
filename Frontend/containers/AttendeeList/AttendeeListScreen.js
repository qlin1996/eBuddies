import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
// import Style from "./AllEventsScreenStyle";

class AttendeeList extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    // await this.props.fetchSingleEvent(this.props.event.id)
    console.log("USERS", this.props.event.users);
    //map through these users, if users.attended === true, return them
  }

  render() {
    let users = this.props.event.users;
    return (
      <View>
        <Text>
          Attendees Registered:
          {this.props.event.users.map((user) => {
            return (
              <Text>
                {user.firstName}
                {user.lastName}
                {user.activity.attended === true ? <Text> HERE</Text> : null}
              </Text>
            );
          })}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // events: state.events,
  event: state.singleEvent,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeList);
