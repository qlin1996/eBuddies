import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Style from "./MyCalendarScreenStyle";
import Event from "../Event/EventScreen";
import { getAllEvents } from "../../store/events";

class MyCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      eventsIHostClicked: true,
      eventsIAttendClicked: false,
    };
  }

  componentDidMount() {
    this.props.getAllEvents();
  }

  eventsIHost = () => {
    const events = this.props.events.filter((event) => {
      return event.hostId === this.props.user.id;
    });

    this.setState({
      events: events,
      eventsIHostClicked: true,
      eventsIAttendClicked: false,
    });
  };

  eventsIAttend = () => {
    const events = this.props.user.events;
    this.setState({
      events: events,
      eventsIHostClicked: false,
      eventsIAttendClicked: true,
    });
  };

  render() {
    return (
      <>
        <ScrollView>
          <Button title="Events I Host" onPress={this.eventsIHost} />
          <Button title="Events I Attend" onPress={this.eventsIAttend} />

          {this.state.events.map((event) => {
            return (
              <View key={event.id}>
                <Event event={event} />
                <Button
                  style={Style.eventButton}
                  title="View Event"
                  onPress={() => {
                    this.props.navigation.navigate("SINGLEEVENT", {
                      id: event.id,
                    });
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  events: state.events,
  activity: state.activity,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getAllEvents()),
  postNewActivity: (id, updateData) => {
    return dispatch(postNewActivity(id, updateData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar);
