import React from "react";
import { Text, View, TextInput, ScrollView, Button } from "react-native";
import io from "socket.io-client";
import { createMesssageThunk } from "../../store/message";
import { fetchSingleEvent } from "../../store/singleEvent";
import { connect } from "react-redux";
const socket = io("http://3d5938c9e2ae.ngrok.io", {
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
    await this.props.fetchSingleEvent(this.props.event.id);
    socket.on("connect", function () {
      console.log("a Socket connection has been made");
      socket.emit("room", this.props.event.id);
    });
    socket.on("chat message", (msg) => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }
  submitChatMessage = () => {
    socket.emit("chat message", this.state.chatMessage);
    this.props.createMessage({
      message: this.state.chatMessage,
      eventId: this.props.event.id,
      senderId: this.props.user.id,
    });
  };

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) => (
      <Text key={chatMessage.id} style={{ borderWidth: 2, top: 500 }}>
        {chatMessage}
      </Text>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
            Welcome to the Groupchat for {this.props.event.name}!
          </Text>
        </View>
        {chatMessages}
        <TextInput
          style={{
            height: 40,
            borderWidth: 2,
            position: "relative",
            top: 500,
            backgroundColor: "lightblue",
          }}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({ chatMessage });
          }}
        />
        <Button title="SEND" onPress={this.submitChatMessage}></Button>
      </ScrollView>
    );
  }
}
const mapToState = (state) => ({
  message: state.message,
  user: state.user,
  event: state.singleEvent,
});
const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMesssageThunk(message)),
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
});

export default connect(mapToState, mapDispatchToProps)(ChatScreen);
