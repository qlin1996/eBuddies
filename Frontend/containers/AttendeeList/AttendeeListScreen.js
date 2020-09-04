import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
// import Style from "./AllEventsScreenStyle";
// import { getAllEvents } from "../../store/events";

class AttendeeList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // events: state.events,
  event: state.singleEvent,
});

const mapDispatchToProps = (dispatch) => ({
  // getAllEvents: () => dispatch(getAllEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeList);
