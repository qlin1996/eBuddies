import React from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import Style from "./SingleEventScreenStyle";

class SingleEvent extends React.Component {
  componentDidMount() {
    try {
      const eventId = this.props.route.params.eventId;
      this.props.fetchSingleEvent(eventId);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <View>
          <Image style={Style.eventImg} source={{ uri: eventId.imgUrl }} />

          <View style={Style.eventDetailsWrapper}>
            <Text style={Style.eventDetails}>Event Name: {eventId.name}</Text>
            <Text style={Style.eventDetails}>
              Event Address: {eventId.address}
            </Text>
            <Text style={Style.eventDetails}>Event Date: {eventId.date}</Text>

            <Text style={Style.eventDetails}>
              Event Description: {eventId.description}
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.singleEvent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
