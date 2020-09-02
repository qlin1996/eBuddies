import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Event from "../Event/EventScreen";
import Style from "../AllEvents/AllEventsScreenStyle";
import { getAllEvents } from "../../store/events";
import { getUserInfo } from "../../store/user";

class HostScreen extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAllEvents();
    this.props.getUser(this.props.user.id);
  }

  handleEventClick = () => {
    this.props.navigation.navigate("SINGLEEVENT");
  };

  render() {
    let userId = this.props.user.id;
    let events = this.props.events;

    let eventList = events.map((event) => {
      if (event.hostId === userId) {
        console.log("YES");
        return (
          <View key={event.id}>
            <Event event={event} />
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                width: "29%",
                alignSelf: "center",
                borderRadius: "10%",
                // padding: 2,
                // margin: 1,
                position: "relative",
                top: "-28%",
                color: "white",
              }}
            >
              <Button
                style={Style.eventButton}
                title="VIEW EVENT"
                onPress={this.handleEventClick}
              />
            </View>
          </View>
        );
      }
    });

    console.log("EVENT LIST", eventList);

    return (
      <>
        <ScrollView>
          <View>
            <Text>{`${this.props.user.firstName} ${this.props.user.lastName}'s Hosting:`}</Text>
          </View>
          <View>
            {events.length >= 1 ? (
              eventList
            ) : (
              <Text style={Style.errorMsg}>Sorry, no events scheduled.</Text>
            )}
          </View>
          <View>
            <Button
              title="Create Another Event"
              onPress={() => this.props.navigation.navigate("ADD")}
            >
              Create Another Event
            </Button>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => {
    return dispatch(getUserInfo(id));
  },
  getAllEvents: () => dispatch(getAllEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HostScreen);
