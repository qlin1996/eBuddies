import React from "react";
import { Text, View, TextInput, ScrollView, Button, Image } from "react-native";
import io from "socket.io-client";
import { createMesssageThunk } from "../../store/message";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import { getUserInfo } from "../../store/user";
import Style from "./ChatScreenStyle";
const socket = io("http://2bade06f66f5.ngrok.io", {
  transports: ["websocket"],
});
class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
    };
    socket.on("connect", function () {
      console.log("a Socket connection has been made");
    });
  }
  async componentDidMount() {
    console.log("STATE WHEN FIRST MOUNTED", this.state);
    this.setState({ chatMessage: "", chatMessages: [] });

    await this.props.getUser(this.props.user.id);
    await this.props.fetchSingleEvent(this.props.event.id);
    // 1. join room
    socket.emit(
      "join-room",
      `${this.props.user.firstName} has joined ${this.props.event.name}`,
      this.props.event.id
    );

    // 4. listens for new joiner
    socket.on("room-joined", (message) => {
      this.setState({ chatMessages: [...this.state.chatMessages, message] });
    });

    // 8. show other messages
    socket.on("send-message", (message) => {
      console.log("message sent back", message);
      console.log("THIS IS STATE", this.state);
      this.setState({ chatMessages: [...this.state.chatMessages, message] });
    });
  }

  submitChatMessage = () => {
    // 5. send message
    socket.emit("chat-message", this.state.chatMessage, this.props.event.id);
    this.props.createMessage({
      message: this.state.chatMessage,
      eventId: this.props.event.id,
      senderId: this.props.user.id,
    });
  };
  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage, index) => (
      <View key={index}>
        <Text style={Style.chatMessage} key={chatMessage.id}>
          {chatMessage}
        </Text>
        <Image
          source={{
            uri: this.props.user.imgUrl,
          }}
          style={Style.userImage}
        />
      </View>
    ));
    return (
      <ScrollView>
        <View>
          <Text style={Style.welcomeChat}>
            Welcome to the Groupchat for {this.props.event.name}!
          </Text>
        </View>
        {chatMessages}
        <TextInput
          style={Style.textInput}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={(chatMessage) => {
            this.setState({ chatMessage });
          }}
        />
        <View style={Style.sendMessageButton}>
          <Button title="SEND" onPress={this.submitChatMessage}></Button>
        </View>
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
  getUser: (id) => {
    return dispatch(getUserInfo(id));
  },
});
export default connect(mapToState, mapDispatchToProps)(ChatScreen);
