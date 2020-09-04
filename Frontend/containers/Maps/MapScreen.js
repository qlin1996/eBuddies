import React from "react";
import { connect } from "react-redux";
import * as Location from "expo-location";
import * as geolib from "geolib";
import MapView from "react-native-maps";
import { Text, View, Button } from "react-native";
import styles from "./MapScreenStyle";
import { Marker } from "react-native-maps";
import { fetchSingleEvent } from "../../store/singleEvent";
import { editActivityAttendance } from "../../store/activity";

class Maps extends React.Component {
  constructor() {
    super();

    this.state = {
      userLocation: {},
      eventLocation: {},
    };
  }

  async componentDidMount() {
    await this.props.fetchSingleEvent(this.props.event.id);
    let { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      let userLocation = await Location.getCurrentPositionAsync({});
      this.setState({
        userLocation: userLocation,
      });
    }
    let eventAddress =
      this.props.event.address +
      " " +
      this.props.event.city +
      " " +
      this.props.event.state +
      " " +
      this.props.event.zipCode;

    let result = await Location.geocodeAsync(eventAddress);
    result[0]["latitudeDelta"] = 0.02;
    result[0]["longitudeDelta"] = 0.045;
    this.setState({
      eventLocation: result,
    });
  }
  handleAttendance = async () => {
    let metersDistance = geolib.getDistance(
      this.state.eventLocation[0],
      this.state.userLocation.coords
    );
    let miles = Math.floor(metersDistance / 1609);
    console.log(miles, "USERS DISTANCE");
    await this.props.editActivityAttendance(
      this.props.event.id,
      this.props.user.id,
      {
        attended: true,
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} region={this.state.eventLocation[0]}>
          <Marker
            coordinate={this.state.eventLocation[0]}
            title={this.props.event.name}
            description={this.props.event.address}
          />
          <Marker
            pinColor={"blue"}
            coordinate={this.state.userLocation.coords}
            title={this.props.user.firstName}
            description={this.props.user.description}
          />
        </MapView>
        <Text style={styles.eventName}>Viewing {this.props.event.name}</Text>
        <View style={styles.backButton}>
          <Button
            title="BACK"
            onPress={() => {
              this.props.navigation.navigate("SINGLEEVENT", {
                id: this.props.event.id,
              });
            }}
          ></Button>
        </View>
        <View style={styles.hereButton}>
          <Button title="IM HERE" onPress={this.handleAttendance}></Button>
        </View>
      </View>
    );
  }
}
const mapToState = (state) => ({
  event: state.singleEvent,
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  editActivityAttendance: (eventId, userId, attendance) => {
    return dispatch(editActivityAttendance(eventId, userId, attendance));
  },
});
export default connect(mapToState, mapDispatchToProps)(Maps);
