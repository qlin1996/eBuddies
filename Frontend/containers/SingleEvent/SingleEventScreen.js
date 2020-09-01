import React from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import Style from "./SingleEventScreenStyle";

class SingleEvent extends React.Component {
  componentDidMount() {
    try {
      const eventId = this.props.navigation.getParam("id");
      this.props.fetchSingleEvent(eventId);
      console.log("ID >> ", eventId);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log("PROPS >> ", this.props);
    return (
      <>
        <View>
          <Image
            style={Style.eventImg}
            source={{ uri: this.props.event.imgUrl }}
          />

          <View style={Style.eventDetailsWrapper}>
            <Text style={Style.eventDetails}>{this.props.event.name}</Text>
            <Text style={Style.eventDetails}>{this.props.event.address}</Text>
            <Text style={Style.eventDetails}>{this.props.event.date}</Text>

            <Text style={Style.eventDetails}>
              {this.props.event.description}
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
