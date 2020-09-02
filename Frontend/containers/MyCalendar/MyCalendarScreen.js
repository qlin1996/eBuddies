import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Style from "./MyCalendarScreenStyle";
import Event from "../Event/EventScreen";
import { getAllEvents } from "../../store/events";
import { getUserInfo } from "../../store/user";

class MyCalendar extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      eventsIHostClicked: true,
      eventsIAttendClicked: false,
    };
  }

  async componentDidMount() {
    await this.props.getAllEvents();
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

  eventsIAttend = async () => {
    await this.props.getUserInfo(this.props.user.id);
    const events = this.props.user.events;
    this.setState({
      events: events,
      eventsIHostClicked: false,
      eventsIAttendClicked: true,
    });
  };

  render() {
    const events = this.state.events || [];
    return (
      <>
        <ScrollView>
          <Button title="Events I Host" onPress={this.eventsIHost} />
          <Button title="Events I Attend" onPress={this.eventsIAttend} />

          {events.map((event) => {
            return (
              <View key={event.id}>
                <Event event={event} />
                <View
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    width: "29%",
                    alignSelf: "center",
                    height: "8%",
                    borderRadius: "10%",
                    // padding: 2,
                    // margin: 1,
                    position: "relative",
                    top: "-13%",
                    color: "white",
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

  getUserInfo: (id) => dispatch(getUserInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar);
