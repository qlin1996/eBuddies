import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Event from "../Event/EventScreen";
import { Helpers, Metrics } from "../../themes";
import { getAllEvents } from "../../store/events";

class AllEvents extends React.Component {
  componentDidMount() {
    this.props.getAllEvents();
  }

  render() {
    let event = this.props.events;

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
            <Event event={event} />
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
