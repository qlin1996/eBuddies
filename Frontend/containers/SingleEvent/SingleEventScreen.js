import React from "react";
import { Text, View, Image, Button, Vibration } from "react-native";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import Modal from "react-native-modal";
import Style from "./SingleEventScreenStyle";
import { getUserInfo } from "../../store/user";
import { postNewActivity } from "../../store/activity";
import * as Notifications from "expo-notifications";
import { Card, Title, Paragraph, Surface, Appbar } from "react-native-paper";
import { serverLink } from "../../store/serverLink";

import io from "socket.io-client";
const socket = io(serverLink, {
  transports: ["websocket"],
});
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
class SingleEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible: false,
    };
  }
  async componentDidMount() {
    try {
      const eventId = this.props.navigation.getParam("id");
      await this.props.fetchSingleEvent(eventId);
      const subscription = Notifications.addNotificationResponseReceivedListener(
        () => {
          this.props.navigation.navigate("MAPS");
        }
      );
      return () => subscription.remove();
    } catch (error) {
      console.log(error);
    }
  }
  //ONCE USER CLICKS VIEW EVENT, PUSH NOTIF IS SCHEDULED
  sendPushNotification = async (pushToken) => {
    let eventHour = Number(this.props.event.time.slice(0, 2));
    let eventMinute = Number(this.props.event.time.slice(3, 5) - 1);
    let milliseconds = eventHour * eventMinute * 1000;
    let triggerDate = new Date(this.props.event.date) + milliseconds;
    let gmt = this.props.event.time.slice(8);
    let trigger2 = new Date(
      triggerDate.slice(0, 15) +
        " " +
        eventHour +
        ":" +
        eventMinute +
        ":00" +
        gmt
    );
    let trigger = new Date(trigger2);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "eBuddies",
        body:
          "We look forward to seeing you soon! Please remember to check in.",
        data: { data: "goes here" },
        sound: "default",
      },
      trigger,
    });
  };
  handleJoin = async () => {
    try {
      await this.sendPushNotification(this.props.user.pushToken);
      await this.props.getUser(this.props.user.id);
      await this.props.postNewActivity({
        userId: this.props.user.id,
        eventId: this.props.event.id,
      });
      this.setState({ isModalVisible: true });

      const waitForModal = () => {
        this.props.navigation.navigate("MYCALENDAR");
        this.setState({
          isModalVisible: false,
        });
      };
      setTimeout(waitForModal, 2500);
    } catch (error) {
      console.log(error);
    }
  };
  handleMap = async () => {
    try {
      // await this.props.getUser(this.props.user.id);
      this.setState({ isModal2Visible: true });

      let eventId = this.props.event.id;

      const waitForModal = () => {
        this.props.navigation.navigate("MAPS", {
          id: eventId,
        });
        this.setState({
          isModal2Visible: false,
        });
      };
      setTimeout(waitForModal, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  convertTime = (timeString) => {
    const hour = timeString.substr(0, 2);
    var h = hour % 12 || 12;
    var ampm = hour < 12 || hour === 24 ? "AM" : "PM";
    return h + timeString.substr(2, 3) + ampm;
  };

  render() {
    const uri =
      this.props.event.imgUrl ||
      "https://www.actuall.eu/wp-content/uploads/2016/10/cropped-White-box.jpg";
    return (
      <View>
        <Appbar.Header style={Style.appHeader}>
          <Appbar.Content
            title={`Viewing ${this.props.event.name}...`}
            subtitle={`We think you'll love this  ${
              this.props.user.firstName ? this.props.user.firstName : ""
            } `}
            color="white"
          />
        </Appbar.Header>
        <Card style={Style.card}>
          <Paragraph style={Style.title}>
            {""}
            {this.props.event.name}
          </Paragraph>
          <Paragraph style={Style.cardAddress}>
            {this.props.event.address}
          </Paragraph>
          <Paragraph style={Style.cardAddress}>
            {this.props.event.city}, {this.props.event.state} {""}
            {this.props.event.zipCode}
          </Paragraph>

          <Paragraph style={Style.cardDate}>
            {this.props.event.date
              ? this.props.event.date.slice(5, 10) +
                "-" +
                this.props.event.date.slice(0, 4)
              : null}{" "}
            {"at"}{" "}
            {this.props.event.time
              ? this.convertTime(this.props.event.time)
              : null}
          </Paragraph>

          <Image style={Style.cardImg} source={{ uri: uri }} />
          <Card.Content>
            <Paragraph style={Style.cardDescription}>
              {this.props.event.description}
            </Paragraph>
          </Card.Content>

          <Card.Actions>
            <Button title="">Cancel</Button>
            <Button title="">Ok</Button>
          </Card.Actions>
        </Card>
        <View>
          {this.props.user.id && (
            <Surface style={Style.surface}>
              <Button title="JOIN EVENT" onPress={this.handleJoin}></Button>
            </Surface>
          )}
        </View>
        <Modal isVisible={this.state.isModalVisible} style={Style.modal}>
          <View>
            <View style={Style.modalText}>
              <Text style={{ fontSize: 20 }}>
                Event {this.props.event.name} has been added!
              </Text>
            </View>
            <Image
              style={Style.image2}
              source={{
                uri: this.props.event.imgUrl,
              }}
            />
          </View>
        </Modal>
        <Surface style={Style.surfaceMap}>
          <Button title="VIEW MAP" onPress={this.handleMap}></Button>
        </Surface>

        <Modal isVisible={this.state.isModal2Visible} style={Style.modal}>
          <View>
            <View style={Style.modalText}>
              <Text style={{ fontSize: 20 }}>
                Directing you to Maps to view {this.props.event.name}'s
                Location!
              </Text>
            </View>
            <View>
              <Text style={Style.mapModalEmojis}>✈️🚖🌃</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.singleEvent,
  user: state.user,
  activity: state.activity,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  getUser: (id) => {
    return dispatch(getUserInfo(id));
  },
  postNewActivity: (activityObj) => {
    return dispatch(postNewActivity(activityObj));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
