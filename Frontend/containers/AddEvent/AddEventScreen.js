import React from "react";
import { TextInput, View, Button, ScrollView, Text, Image } from "react-native";
import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";
import { postNewEvent } from "../../store/events";
import Style from "./AddEventScreenStyle";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Modal from "react-native-modal";
import { Fonts } from "../../themes";
class AddEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      date: "",
      time: "",
      category: "",
      description: "",
      eventId: "",
      imgUrl: "",
      isModalVisible: false,
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ isModalVisible: true });

    this.props.postNewEvent(this.state);

    this.setState({
      // name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      date: "",
      time: "",
      description: "",
      eventId: "",
      // imgUrl: "",
    });
    const waitForModal = () => {
      this.props.navigation.navigate("EVENTS");
      this.setState({
        isModalVisible: false,
      });
    };
    setTimeout(waitForModal, 2000);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  selectPicture = async () => {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: 1,
      });
      this.setState({ imgUrl: uri });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <ScrollView>
          <View style={Style.addForm}>
            <View style={Style.field1}>
              <TextInput
                style={Style.name}
                name="name"
                type="text"
                placeholder="Event Name"
                onChangeText={(text) => {
                  this.setState({ name: text });
                }}
                value={this.state.name}
              />
            </View>
            <View style={Style.field2}>
              <TextInput
                style={Style.address}
                placeholder="Street Address"
                onChangeText={(text) => {
                  this.setState({ address: text });
                }}
                value={this.state.address}
              />
            </View>
            <View style={Style.field3}>
              <TextInput
                style={Style.city}
                placeholder="City"
                onChangeText={(text) => {
                  this.setState({ city: text });
                }}
                value={this.state.city}
              />
            </View>

            <View style={Style.field4}>
              <TextInput
                style={Style.state}
                placeholder="State"
                onChangeText={(text) => {
                  this.setState({ state: text });
                }}
                value={this.state.state}
              />
            </View>

            <View style={Style.field5}>
              <TextInput
                style={Style.zip}
                placeholder="Zipcode"
                onChangeText={(text) => {
                  this.setState({ zipcode: text });
                }}
                value={this.state.zipcode}
              />
            </View>

            <View style={Style.field6}>
              <TextInput
                style={Style.date}
                placeholder="Date"
                onChangeText={(text) => {
                  this.setState({ date: text });
                }}
                value={this.state.date}
              />
            </View>
            <View style={Style.field7}>
              <TextInput
                style={Style.time}
                placeholder="Time"
                onChangeText={(text) => {
                  this.setState({ time: text });
                }}
                value={this.state.time}
              />
            </View>
            <View style={Style.field8}>
              <ScrollView>
                <TextInput
                  style={Style.description}
                  placeholder="Description"
                  onChangeText={(text) => {
                    this.setState({ description: text });
                  }}
                  value={this.state.description}
                />
              </ScrollView>
            </View>
            <View style={Style.field9}>
              <TextInput
                style={Style.category}
                placeholder="Interest Type"
                onChangeText={(text) => {
                  this.setState({ category: text });
                }}
                value={this.state.category}
              />
            </View>
          </View>
          <View style={Style.selectPic}>
            <Button title="Select Picture" onPress={this.selectPicture} />
            <View style={Style.camera}>
              <Text>📸</Text>
            </View>
          </View>
          <View style={Style.eventImg}>
            <Image
              style={Style.image}
              source={{
                uri: this.state.imgUrl,
              }}
            />
          </View>
          <Modal isVisible={this.state.isModalVisible} style={Style.modal}>
            <View>
              <Image
                source={require("../../assets/ebuddies.gif")}
                style={Style.logo}
              />
              <View style={Style.modalText}>
                <Text style={{ ...Fonts.h4 }}>
                  Event, {this.state.name} has been added!
                </Text>
              </View>
              <Image
                style={Style.image2}
                source={{
                  uri: this.state.imgUrl,
                }}
              />
            </View>
          </Modal>

          <View style={Style.addEvent}>
            <Button
              title="Add Event"
              color="white"
              onPress={this.handleSubmit}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapDispatch = (dispatch) => ({
  postNewEvent: (addEventForm) => dispatch(postNewEvent(addEventForm)),
});

export default connect(null, mapDispatch)(AddEventScreen);
