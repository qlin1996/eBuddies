import React from "react";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import { Text, View, Button } from "react-native";
import styles from "./MapScreenStyle";
import { Marker } from "react-native-maps";
import { fetchSingleEvent } from "../../store/singleEvent";
import { editActivityAttendance } from "../../store/activity";

class Maps extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await this.props.fetchSingleEvent(this.props.event.id);
  }
  handleAttendance = async () => {
    //IF USER IN I MILE RADIUS OF LONG & LAT
    console.log(this.props.event.id, "EVENT ID", this.props.user.id, "USER ID");
    await this.props.editActivityAttendance(
      this.props.event.id,
      this.props.user.id,
      {
        attended: true,
      }
    );
  };

  render() {
    let markers = [
      {
        latitude: this.props.event.latitude,
        longitude: this.props.event.longitude,
        latitudeDelta: 8.0,
        longitudeDelta: 8.0,
        title: this.props.event.name,
        address: this.props.event.address,
      },
    ];
    let region = {
      latitude: this.props.event.latitude,
      longitude: this.props.event.longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.045,
    };

    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} region={region}>
          <Marker
            coordinate={region}
            title={markers[0].title}
            description={markers[0].address}
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
