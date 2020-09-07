import React from "react";
import { Text, View, Image, Button, TextPropTypes } from "react-native";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import Modal from "react-native-modal";
import Style from "./JoinedEventScreenStyle";
import { getUserInfo } from "../../store/user";
import { postNewActivity } from "../../store/activity";
import { editActivityAttendance } from "../../store/activity";
import updateEvent from "../../containers/UpdateEvent/UpdateEvent";
import {
  Card,
  Title,
  Paragraph,
  Surface,
  Appbar,
  Menu,
  Divider,
  Provider,
} from "react-native-paper";
class JoinedEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible: false,
      visible: false,
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
  openMenu = () => {
    this.setState({
      visible: true,
    });
  };
  closeMenu = () => {
    this.setState({
      visible: false,
    });
  };
  handleChat = async () => {
    try {
      await this.props.getUser(this.props.user.id);
      this.setState({ visible: false });

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
      this.setState({ visible: false });
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
          <Card.Title title={`${this.props.event.name}`} />
          <Paragraph style={Style.cardAddress}>
            Location: {this.props.event.address}
          </Paragraph>
          <Paragraph style={Style.cardDate}>
            Date:{" "}
            {this.props.event.date
              ? this.props.event.date.slice(5, 10) +
                "-" +
                this.props.event.date.slice(0, 4)
              : null}
          </Paragraph>
          <Paragraph style={Style.cardTime}>
            {" "}
            Time:{" "}
            {this.props.event.time
              ? this.convertTime(this.props.event.time)
              : null}
          </Paragraph>
          <Card.Cover
            style={Style.cardImg}
            source={{ uri: this.props.event.imgUrl }}
          />
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
        <Surface style={Style.surface}>
          <View style={Style.menu}>
            <Menu
              visible={this.state.visible}
              onDismiss={this.closeMenu}
              anchor={
                <Button onPress={this.openMenu} title="Show menu" color="white">
                  Show menu
                </Button>
              }
            >
              <Menu.Item title="Join the chat" onPress={this.handleChat} />
              <Menu.Item title="View on map" onPress={this.handleMap} />
              <Divider />
              <Menu.Item
                title="Edit Event"
                onPress={() => {
                  this.props.navigation.navigate(
                    "EDITEVENT",
                    {
                      id: this.props.event.id,
                    },
                    this.setState({ visible: false })
                  );
                }}
              />
              <Menu.Item
                title="View Attendees"
                onPress={() => {
                  this.props.navigation.navigate(
                    "ATTENDEES",
                    {
                      id: this.props.event.id,
                    },
                    this.setState({ visible: false })
                  );
                }}
              />
            </Menu>
          </View>
        </Surface>
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
