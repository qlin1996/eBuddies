import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Event from "../Event/EventScreen";
import Style from "./AllEventsScreenStyle";
import { getAllEvents } from "../../store/events";

class AllEvents extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAllEvents();
  }

  handleEventClick = () => {
    this.props.navigation.navigate("SINGLEEVENT");
    console.log("Button hit >>");
  };

  render() {
    let { events } = this.props || [];

    let eventList;

    if (events.length >= 1) {
      eventList = events.map((event) => {
        return (
          <View key={event.id}>
            <Event event={event} />
            <Button
              style={Style.eventButton}
              title="View Event"
              onPress={this.handleEventClick}
            />
          </View>
        );
      });
    }

    return (
      <>
        <ScrollView>
          <View>
            {events.length >= 1 ? (
              eventList
            ) : (
              <Text style={Style.errorMsg}>Sorry, no events scheduled.</Text>
            )}
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getAllEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents);
