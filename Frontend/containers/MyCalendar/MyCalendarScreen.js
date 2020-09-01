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
                <View
                  style={{
                    position: "relative",
                    margin: 4,
                    padding: 4,
                    backgroundColor: "white",
                    borderRadius: 9,
                    // borderWidth: 3,
                    // borderColor: "",
                    width: "40%",
                    top: "-1%",
                    left: "29%",
                  }}
                >
                  <Button
                    title="VIEW EVENT"
                    onPress={() => {
                      this.props.navigation.navigate("JOINEDEVENT", {
                        id: event.id,
                      });
                    }}
                  ></Button>
                </View>
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
