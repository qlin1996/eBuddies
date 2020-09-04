import React from "react";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import { Text, View, Button } from "react-native";
import styles from "./MapScreenStyle";
import { Marker } from "react-native-maps";
import { fetchSingleEvent } from "../../store/singleEvent";

class Maps extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await this.props.fetchSingleEvent(this.props.event.id);
  }

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
      </View>
    );
  }
}
const mapToState = (state) => ({
  event: state.singleEvent,
});
const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
});
export default connect(mapToState, mapDispatchToProps)(Maps);
