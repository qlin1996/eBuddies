import React from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import Event from "../Event/EventScreen";
import { Helpers, Metrics } from "../../themes";
import { getAllEvents } from "../../store/events";

class AllEvents extends React.Component {
  componentDidMount() {
    this.props.getAllEvents();
  }

  render() {
    let { events } = this.props || [];

    let eventList;

    if (events.length >= 1) {
      eventList = events.map((event) => {
        return (
          <View key={event.id}>
            <Event event={event} />
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
              <Text>Sorry, no events scheduled.</Text>
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
