import React from "react";
import { Text, View, Image, Button } from "react-native";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import Modal from "react-native-modal";
import Style from "./JoinedEventScreenStyle";
import { getUserInfo } from "../../store/user";
import { postNewActivity } from "../../store/activity";
import { editActivityAttendance } from "../../store/activity";

class JoinedEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible: false,
    };
  }
  componentDidMount() {
    try {
      const eventId = this.props.navigation.getParam("id");
      this.props.fetchSingleEvent(eventId);
    } catch (error) {
      console.log(error);
    }
  }

  handleChat = async () => {
    try {
      await this.props.getUser(this.props.user.id);
      this.setState({ isModalVisible: true });

      let eventId = this.props.event.id;

      const waitForModal = () => {
        this.props.navigation.navigate("CHAT", {
          id: eventId,
        });
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
      await this.props.getUser(this.props.user.id);
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
    return (
      <>
        <View style={Style.wholeCardDiv}>
          <View style={Style.imageDiv}>
            <Image
              style={Style.eventImg}
              source={{ uri: this.props.event.imgUrl }}
            />
          </View>
          <View style={Style.headerBackground}>
            <Text style={Style.headerText}>{this.props.event.name}</Text>
          </View>
          <View style={Style.informationDiv}>
            <Text style={Style.fonts}>{this.props.event.description}</Text>
            <Text style={Style.addressFonts}>{this.props.event.address}</Text>
            <Text style={Style.dateFonts}>
              {this.props.event.date
                ? this.props.event.date.slice(0, 16)
                : null}
            </Text>
            <View>
              <Text style={Style.dateFonts}>
                Time:{" "}
                {this.props.event.time
                  ? this.convertTime(this.props.event.time)
                  : null}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={Style.joinChatButton}>
            <Button title="JOIN THE CHAT" onPress={this.handleChat}></Button>
          </View>
        </View>
        <Modal isVisible={this.state.isModalVisible} style={Style.modal}>
          <View>
            <Image
              source={require("../../assets/ebuddies.gif")}
              style={Style.logo}
            />
            <View style={Style.modalText}>
              <Text style={{ fontSize: 20 }}>
                Connecting you to the Group Chat for, {this.props.event.name}!
              </Text>
            </View>
            <View>
              <Text style={Style.modalChatMessage}>💬💬💬</Text>
            </View>
          </View>
        </Modal>
        <View style={Style.mapButton}>
          <Button title="VIEW ON MAP" onPress={this.handleMap}></Button>
        </View>
        <View>
          <Button
            title="VIEW ATTENDEES"
            onPress={() => {
              this.props.navigation.navigate("ATTENDEES", {
                id: this.props.event.id,
              });
            }}
          ></Button>
        </View>
        <Modal isVisible={this.state.isModal2Visible} style={Style.modal}>
          <View>
            <Image
              source={require("../../assets/ebuddies.gif")}
              style={Style.logo}
            />
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
      </>
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

  postNewActivity: (activityObject) => {
    return dispatch(postNewActivity(activityObject));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinedEvent);
