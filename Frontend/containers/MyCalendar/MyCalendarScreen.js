import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Style from "./MyCalendarScreenStyle";
import Event from "../Event/EventScreen";
import { getAllEvents } from "../../store/events";
import { getUserInfo } from "../../store/user";
import {
  Card,
  Title,
  Paragraph,
  Surface,
  Appbar,
  List,
  Colors,
} from "react-native-paper";
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

  eventsIHost = async () => {
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
        <Appbar.Header style={Style.appHeader}>
          <Appbar.Content
            title={`Viewing ${this.props.user.firstName} ${this.props.user.lastName}'s Calendar...`}
            subtitle="eBuddies"
            color="white"
          />
        </Appbar.Header>
        <ScrollView>
          <Surface style={Style.surfaceHost}>
            <Button title="Events I Host" onPress={this.eventsIHost} />
            <List.Icon
              style={Style.hostIcon}
              color={Colors.blue500}
              icon="folder"
            />
          </Surface>
          <Surface style={Style.surfaceAttend}>
            <Button title="Events I Attend" onPress={this.eventsIAttend} />
            <List.Icon
              style={Style.attendeeIcon}
              color={Colors.blue500}
              icon="calendar"
            />
          </Surface>

          {events.map((event) => {
            return (
              <View key={event.id}>
                <Event event={event} />
                <Surface style={Style.surface}>
                  <Button
                    title="VIEW EVENT"
                    onPress={() => {
                      this.props.navigation.navigate("JOINEDEVENT", {
                        id: event.id,
                      });
                    }}
                  ></Button>
                </Surface>
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
