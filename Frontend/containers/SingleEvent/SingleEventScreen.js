import React from "react";
import { Text, View, Image, Button } from "react-native";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import Modal from "react-native-modal";
import { postUserEvent } from "../../store/events";
import Style from "./SingleEventScreenStyle";
import { getUserInfo } from "../../store/user";
import { postNewActivity } from "../../store/activity";
class SingleEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
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

  handleJoin = async () => {
    try {
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
            <Text style={Style.dateFonts}>{this.props.event.date}</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              width: "29%",
              alignSelf: "center",
              borderRadius: "10%",
              // padding: 2,
              // margin: 1,
              position: "relative",
              top: "-38%",
              color: "white",
            }}
          >
            <Button title="JOIN EVENT" onPress={this.handleJoin}></Button>
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
                Event, {this.props.event.name} has been added!
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.singleEvent,
  user: state.user,
  activity: state.activity,
  // events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  // postUserEvent: (id, event) => dispatch(postUserEvent(id, event)),
  getUser: (id) => {
    return dispatch(getUserInfo(id));
  },
  postNewActivity: (id, updateData) => {
    return dispatch(postNewActivity(id, updateData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
