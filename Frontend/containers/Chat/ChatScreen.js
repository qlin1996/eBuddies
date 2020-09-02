import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";

const socket = io("http://515fb4e4adc9.ngrok.io", {
  transports: ["websocket"],
});
const room = 1;
export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userId: null,
    };
    // socket.on("message", this.onReceivedMessage);
    // socket.on("userId", (userId) => this.setState({ userId }));
    // this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  componentDidMount() {
    socket.on("connect", function () {
      console.log("a Socket connection has been made");
    });
    //person send me a message
    socket.on("recieve message", (message) => {
      console.log("This is the message", message);
    });

    socket.on("message", function (data) {
      console.log("Incoming message:", data);
    });
  }

  // onReceivedMessage(message) {
  //   this.onSend([message]);
  // }

  onSend(messages = []) {
    //me sending a message
    socket.emit("send message", messages);
    socket.emit("room", room);
    // socket.emit("message", messages[0]);
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  render() {
    return <GiftedChat messages={this.state.messages} onSend={this.onSend} />;
  }
}
