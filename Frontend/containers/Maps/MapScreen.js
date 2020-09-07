import React from "react";
import { connect } from "react-redux";
import * as Location from "expo-location";
import * as geolib from "geolib";
import MapView from "react-native-maps";
import { Text, View, Button, Image } from "react-native";
import styles from "./MapScreenStyle";
import { Marker } from "react-native-maps";
import { fetchSingleEvent } from "../../store/singleEvent";
import { editActivityAttendance } from "../../store/activity";
import Modal from "react-native-modal";
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
        <View>
          <View style={styles.hereButton}>
            <Button title="IM HERE" onPress={this.handleAttendance}></Button>
          </View>
        </View>
        <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
          <View>
            <Image
              source={require("../../assets/ebuddies.gif")}
              style={styles.logo}
            />
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
        <Modal isVisible={this.state.isModal2Visible} style={styles.modal2}>
          <View>
            <Image
              source={require("../../assets/ebuddies.gif")}
              style={styles.logo}
            />
            <View style={styles.modalText}>
              <Text style={{ fontSize: 20 }}>
                Sorry, looks like you have not yet reached the destination. You
                are still {this.state.miles} miles away.
              </Text>
            </View>
            <View>
              <Text style={styles.mapModalEmojis}>🚖🚕✈️</Text>
            </View>
          </View>
        </Modal>
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
