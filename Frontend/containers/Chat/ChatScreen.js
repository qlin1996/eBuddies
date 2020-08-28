import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
window.navigator.userAgent = "react-native";
import io from "socket.io-client";

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onSend = this.onSend.bind(this);
    this.socket = io("localhost:8080", { jsonp: false });
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://facebook.github.io/react/img/logo_og.png",
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.socket.emit("message", "hello");
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
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
