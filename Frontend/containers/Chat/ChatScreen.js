import React from "react";
import { Text, View, TextInput, ScrollView, Button, Image } from "react-native";
import io from "socket.io-client";
import { createMesssageThunk } from "../../store/message";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import { getUserInfo } from "../../store/user";
import Style from "./ChatScreenStyle";
const socket = io("http://04090154a8d1.ngrok.io", {
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
    await this.props.getUser(this.props.user.id);
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
      <View>
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
