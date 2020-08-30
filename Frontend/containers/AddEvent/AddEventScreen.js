import React from "react";
import { TextInput, View, Button, ScrollView } from "react-native";
import { connect } from "react-redux";
import { postNewEvent } from "../../store/events";
import Style from "./AddEventScreenStyle";
// import { Helpers, Metrics } from "../../themes";

class AddEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      date: "",
      time: "",
      description: "",
      eventId: "",
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.postNewEvent(this.state);

    this.setState({
      name: "",
      address: "",
      date: "",
      time: "",
      description: "",
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <ScrollView>
          {/* event image */}
          <View style={Style.eventImg} />

          {/* event information */}

          <View style={Style.eventForm}>
            <TextInput
              style={Style.text}
              name="name"
              type="text"
              placeholder="Event Name"
              onChangeText={(text) => {
                this.setState({ name: text });
              }}
              value={this.state.name}
            />

            <TextInput
              style={Style.text}
              placeholder="Address"
              onChangeText={(text) => {
                this.setState({ address: text });
              }}
              value={this.state.address}
            />

            <TextInput
              style={Style.text}
              placeholder="Date"
              onChangeText={(text) => {
                this.setState({ date: text });
              }}
              value={this.state.date}
            />

            <TextInput
              style={Style.text}
              placeholder="Time"
              onChangeText={(text) => {
                this.setState({ time: text });
              }}
              value={this.state.time}
            />

            <TextInput
              style={Style.text}
              placeholder="Description"
              onChangeText={(text) => {
                this.setState({ description: text });
              }}
              value={this.state.description}
            />
          </View>

          <Button
            style={Style.addEventButton}
            title="Add Event"
            onPress={this.handleSubmit}
          />
        </ScrollView>
      </>
    );
  }
}

const mapDispatch = (dispatch) => ({
  postNewEvent: (addEventForm) => dispatch(postNewEvent(addEventForm)),
});

export default connect(null, mapDispatch)(AddEventScreen);
