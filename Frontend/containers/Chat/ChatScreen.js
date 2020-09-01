import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";
const socket = io("http://localhost:8080", {
  transports: ["websocket"],
});
export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
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
  }
  onSend(messages = []) {
    //me sending a message

    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
    socket.emit("send message ", messages);
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
