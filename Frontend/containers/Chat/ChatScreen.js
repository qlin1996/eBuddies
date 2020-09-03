import React from "react";
import { Text, View, TextInput } from "react-native";
import io from "socket.io-client";
import { createMesssageThunk } from "../../store/message";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";

const socket = io("http://b769eafcc7af.ngrok.io", {
  transports: ["websocket"],
});

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
    };
  }

  async componentDidMount() {
    // const eventId = this.props.navigation.getParam("id");
    // console.log("eventID", eventId);

    // await this.props.fetchSingleEvent(this.props.event.id);

    console.log("EVENT PLEASE", this.props.event);

    socket.on("connect", function () {
      console.log("a Socket connection has been made");
    });
    socket.on("chat message", (msg) => {
      console.log("front end recieving messages", msg);
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }
  submitChatMessage = () => {
    socket.emit("chat message", this.state.chatMessage);
    this.props.createMessage({
      message: this.state.chatMessage,
      eventId: this.props.navigation.getParam("id"),
      senderId: this.props.user.id,
    });
    console.log("this is CHAT MESSAGE", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  };

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) => (
      <Text key={chatMessage.id} style={{ borderWidth: 2, top: 500 }}>
        {chatMessage}
      </Text>
    ));
    return (
      <View>
        <View>
          <Text>Welcome to Event {this.props.event.name}</Text>
        </View>
        {chatMessages}
        <TextInput
          style={{ height: 40, borderWidth: 2, top: 600 }}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({ chatMessage });
          }}
        />
      </View>
    );
  }
}
const mapToState = (state) => ({
  message: state.message,
  user: state.user,
  event: state.event,
});
const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMesssageThunk(message)),
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
});

export default connect(mapToState, mapDispatchToProps)(ChatScreen);
