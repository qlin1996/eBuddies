import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Event from "../Event/EventScreen";
import Style from "./AllEventsScreenStyle";
import { getAllEvents } from "../../store/events";
import { Appbar, Surface } from "react-native-paper";

class AllEvents extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getAllEvents();
  }

  handleEventClick = () => {
    this.props.navigation.navigate("SINGLEEVENT");
  };

  render() {
    let { events } = this.props || [];

    let eventList;

    if (events.length >= 1) {
      eventList = events.map((event) => {
        return (
          <View key={event.id}>
            <Event event={event} />
            <View style={Style.eventMap}>
              <Surface style={Style.surface}>
                <Button
                  title="View Event"
                  // onPress={this.handleEventClick}
                  onPress={() => {
                    this.props.navigation.navigate("SINGLEEVENT", {
                      id: event.id,
                    });
                  }}
                />
              </Surface>
            </View>
          </View>
        );
      });
    }

    return (
      <>
        <Appbar.Header style={Style.appHeader}>
          <Appbar.Content
            title="Viewing All Events...."
            subtitle="eBuddies"
            color="white"
          />
        </Appbar.Header>
        <ScrollView>
          {events.length >= 1 ? (
            eventList
          ) : (
            <Text style={Style.errorMsg}>Sorry, no events scheduled.</Text>
          )}
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
