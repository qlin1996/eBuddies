import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import Style from "./AllEventsScreenStyle";
import { Helpers, Metrics } from "../../themes";
import { getAllEvents } from "../../store/events";

class AllEvents extends React.Component {
  componentDidMount() {
    this.props.getAllEvents();
    console.log("BELOW ARE ALL THE EVENTS");
    console.log(this.props.events);
  }

  render() {
    return (
      <>
        <View
          style={[
            Helpers.fill,
            Helpers.rowMain,
            Metrics.mediumHorizontalMargin,
            Metrics.mediumVerticalMargin,
          ]}
        >
          <View>
            <View style={Style.headerMain}>
              <Text style={Style.headerText}>All Events</Text>
              <Text style={Style.headerText}>New York, NY</Text>
              <Text style={Style.headerText}>8/21/20</Text>
            </View>

            <View style={Style.eventImg} />

            <View>
              <Text style={Style.text}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim.
                <Text style={Style.text}>Name of Event</Text>
              </Text>
              <Text style={Style.moreText}>...more</Text>
            </View>
          </View>
        </View>
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
