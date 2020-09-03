import React from "react";
import { Text, View, TextInput, ScrollView, Button, Image } from "react-native";
import io from "socket.io-client";
import { createMesssageThunk } from "../../store/message";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import { getUserInfo } from "../../store/user";
import { getMesssagesThunk } from "../../store/messages";
import Style from "./ChatScreenStyle";
import { serverLink } from "../../store/serverLink";

const socket = io(serverLink, {
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
    await this.props.getUser(this.props.user.id);
    await this.props.fetchSingleEvent(this.props.event.id);
    await this.props.getMessages(this.props.event.id);
    this.setState({ chatMessages: this.props.messages });

    // 1. join room
    socket.emit("join-room", {
      message: `${this.props.user.firstName} has joined ${this.props.event.name}`,
      room: this.props.event.id,
      imgUrl: this.props.user.imgUrl,
    });

    // 4. listens for new joiner
    socket.on("room-joined", (message, imgUrl) => {
      this.setState({
        chatMessages: [...this.state.chatMessages, message],
      });
    });

    // 8. show other messages
    socket.on("send-message", (message) => {
      this.setState({ chatMessages: [...this.state.chatMessages, message] });
    });
  }

  submitChatMessage = () => {
    // 5. send message
    socket.emit("chat-message", this.state.chatMessage, this.props.event.id);
    this.props.createMessage({
      message: this.state.chatMessage.message,
      eventId: this.props.event.id,
      senderId: this.props.user.id,
    });
  };

  render() {
    console.log("STATE", this.state);
    const chatMessages = this.state.chatMessages.map((chatMessage, index) => (
      <View style={Style.chatMessages} key={index}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={{
              uri: this.props.user.imgUrl,
            }}
            style={Style.userImage}
          />
          <Text style={Style.chatMessage}>{chatMessage.message}</Text>
        </ScrollView>
      </View>
    ));

    return (
      <ScrollView nestedScrollEnabled>
        <View style={Style.screenWrapper}>
          <Text style={Style.welcomeChat}>
            {this.props.event.name} Groupchat
          </Text>

          <View style={Style.textInputWrapper}>
            <TextInput
              style={Style.textInput}
              autoCorrect={false}
              value={this.state.chatMessage}
              onSubmitEditing={() => this.submitChatMessage()}
              onChangeText={(chatMessage) => {
                this.setState({ chatMessage: { message: chatMessage } });
              }}
            />

            <View style={Style.sendMessageButton}>
              <Button title="SEND" onPress={this.submitChatMessage}></Button>
            </View>
          </View>

          {chatMessages}
        </View>
      </ScrollView>
    );
  }
}

const mapToState = (state) => ({
  message: state.message,
  messages: state.messages,
  user: state.user,
  event: state.singleEvent,
});

const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMesssageThunk(message)),
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  getUser: (id) => {
    return dispatch(getUserInfo(id));
  },
  getMessages: (eventId) => dispatch(getMesssagesThunk(eventId)),
});

export default connect(mapToState, mapDispatchToProps)(ChatScreen);
