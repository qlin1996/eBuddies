import React from "react";
import { connect } from "react-redux";
import * as Location from "expo-location";
import * as geolib from "geolib";
import MapView from "react-native-maps";
import { Text, View, Button, Image } from "react-native";
import styles from "./MapScreenStyle";
import { Marker } from "react-native-maps";
import { fetchSingleEvent } from "../../store/event";
import { editActivityAttendance } from "../../store/activity";
import Modal from "react-native-modal";
import { Appbar, Surface } from "react-native-paper";

class Maps extends React.Component {
  constructor() {
    super();

    this.state = {
      userLocation: {},
      eventLocation: {},
      isModalVisible: false,
      isModal2Visible: false,
      miles: 0,
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
    result[0]["latitudeDelta"] = 0.05;
    result[0]["longitudeDelta"] = 0.065;
    this.setState({
      eventLocation: result,
    });
  }

  handleAttendance = async () => {
    let metersDistance = geolib.getDistance(
      this.state.eventLocation[0],
      this.state.userLocation.coords
    );
    this.setState({ miles: Math.floor(metersDistance / 1609) });

    if (this.state.miles <= 20) {
      await this.props.editActivityAttendance(
        this.props.event.id,
        this.props.user.id,
        {
          attended: true,
        }
      );
      this.setState({ isModalVisible: true });

      let eventId = this.props.event.id;

      const waitForModal = () => {
        this.props.navigation.navigate("JOINEDEVENT", {
          id: eventId,
        });
        this.setState({
          isModalVisible: false,
        });
      };
      setTimeout(waitForModal, 2500);
    } else {
      this.setState({ isModal2Visible: true });

      let eventId = this.props.event.id;
      const waitForModal = () => {
        this.props.navigation.navigate("JOINEDEVENT", {
          id: eventId,
        });
        this.setState({
          isModal2Visible: false,
        });
      };
      setTimeout(waitForModal, 5000);
    }
  };
  render() {
    let userLocation = this.state.userLocation.coords || {
      accuracy: 65,
      altitude: 31.08802032470703,
      altitudeAccuracy: 10,
      heading: -1,
      latitude: 40.158599018515304,
      longitude: -74.08746105990927,
      speed: -1,
    };

    let eventLocation = this.state.eventLocation[0] || {
      accuracy: 100,
      altitude: 0,
      latitude: 40.7286439,
      latitudeDelta: 0.05,
      longitude: -73.9921716,
      longitudeDelta: 0.065,
    };

    return (
      <>
        {this.props.user.id ? (
          <>
            <Appbar.Header style={styles.appHeader}>
              <Appbar.Content
                title={`Locating ${
                  this.props.user.firstName ? this.props.user.firstName : "you"
                } to ${this.props.event.name}...`}
                color="white"
              />
            </Appbar.Header>

            <View style={styles.container}>
              <MapView style={styles.mapStyle} region={eventLocation}>
                <Marker
                  coordinate={eventLocation}
                  title={this.props.event.name}
                  description={this.props.event.address}
                />
                <Marker
                  pinColor={"blue"}
                  coordinate={userLocation}
                  title={this.props.user.firstName}
                  description={this.props.user.description}
                />
              </MapView>

              <Surface style={styles.surface}>
                <Button
                  title="BACK"
                  onPress={() => {
                    this.props.navigation.navigate("SINGLEEVENT", {
                      id: this.props.event.id,
                    });
                  }}
                />
              </Surface>
              <Surface style={styles.surfaceHere}>
                <Button title="IM HERE" onPress={this.handleAttendance} />
              </Surface>

              <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
                <View>
                  <View style={styles.modalText}>
                    <Text style={{ fontSize: 20 }}>
                      Thanks for checking in. We're excited to meet you,{" "}
                      {this.props.user.firstName}!
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.modalChatMessage}>🤩🥳💫</Text>
                  </View>
                </View>
              </Modal>
              <Modal
                isVisible={this.state.isModal2Visible}
                style={styles.modal2}
              >
                <View>
                  <View style={styles.modalText}>
                    <Text style={{ fontSize: 20 }}>
                      Sorry, looks like you have not yet reached the
                      destination. You are still {this.state.miles} miles away.
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.mapModalEmojis}>🚖🚕✈️</Text>
                  </View>
                </View>
              </Modal>
            </View>
          </>
        ) : (
          <>
            <Surface style={styles.surfaceback}>
              <Text style={styles.error}>
                Please log in or create an account to locate our events
              </Text>
              <Button
                title="BACK"
                onPress={() => {
                  this.props.navigation.navigate("SINGLEEVENT", {
                    id: this.props.event.id,
                  });
                }}
              />
            </Surface>
          </>
        )}
      </>
    );
  }
}
const mapToState = (state) => ({
  event: state.event,
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  editActivityAttendance: (eventId, userId, attendance) => {
    return dispatch(editActivityAttendance(eventId, userId, attendance));
  },
});
export default connect(mapToState, mapDispatchToProps)(Maps);
