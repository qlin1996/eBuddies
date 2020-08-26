import React from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import Style from "./AllEventsScreenStyle";
import { Helpers, Metrics } from "../../themes";
import { getAllEvents } from "../../store/events";

class AllEvents extends React.Component {
  componentDidMount() {
    this.props.getAllEvents();
  }

  render() {
    let event = this.props.events[0];
    // console.log("EVENTS PROPS >> ", this.props.events[0].name);

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
            <View style={Style.eventHeader}>
              <Text style={Style.headerText}>{event.name}</Text>
              <Text style={Style.headerText}>{event.address}</Text>
              <Text style={Style.headerText}>{event.date}</Text>
              <Image style={Style.eventImg} source={{ uri: event.imgUrl }} />
            </View>

            <View style={Style.eventImg} />

            <View>
              <Text style={Style.text}>{event.description}</Text>
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
