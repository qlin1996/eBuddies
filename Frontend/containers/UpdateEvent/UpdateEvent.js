import React from "react";
import { TextInput, View, Button, ScrollView, Text, Image } from "react-native";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { fetchUpdateEvent } from "../../store/singleEvent";
import Style from "./UpdateEventScreenStyle";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Metrics, Fonts, Colors } from "../../themes";
import RNPickerSelect from "react-native-picker-select";
import { fetchEvent } from "../../store/event";
class AddEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.pickerRef = React.createRef();
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
      hostId: "",
      isDatePickerVisible: false,
      isTimePickerVisible: false,
      height: 0,
    };
  }

  async componentDidMount() {
    await this.props.fetchEvent(this.props.navigation.getParam("id"));
    console.log("THIS IS THE PROPS", this.props);
    this.setState({
      hostId: this.props.user.id,
      name: this.props.event.name,
      adress: this.props.event.address,
      city: this.props.event.city,
      state: this.props.event.state,
      zipcode: this.props.event.zipcode,
      date: this.props.event.date,
      time: this.props.event.time,
      category: this.props.event.category,
      descriptioin: this.props.event.description,
      imgUrl: this.props.event.imgUrl,
      eventId: this.props.event.id,
    });
    console.log("This is the current state", this.state);
  }

  isValidUSZip = (zipCode) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  };

  handleSubmit = async () => {
    if (
      this.state.name.length &&
      this.state.address.length &&
      this.state.city.length &&
      this.state.state.length &&
      this.state.zipcode.length &&
      this.state.date.length &&
      this.state.time.length &&
      this.state.category.length &&
      this.state.description.length
    ) {
      this.setState({ isModalVisible: true });
      this.setState({ hostId: this.props.user.id });
      await this.props.updateEvent(
        this.props.navigation.getParam("id"),
        this.state
      );

      this.setState({
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        date: "",
        time: "",
        description: "",
        eventId: "",
        imgUrl: "",
        hostId: "",
        selectedValue: "Food",
      });
      const waitForModal = () => {
        this.props.navigation.navigate("EVENTS");
        this.setState({
          isModalVisible: false,
        });
      };
      setTimeout(waitForModal, 2000);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
      <ScrollView>
        <View style={{ flex: 1, marginBottom: 100 }}>
          <View style={Style.imageContainer}>
            <Image
              style={Style.image}
              source={{
                uri: this.state.imgUrl,
              }}
            />
            <Button title="Select Picture" onPress={this.selectPicture} />
            <Button title="Take Picture" onPress={this.takePicture} />
          </View>

          <View style={Style.eventContainer}>
            {this.state.name.length === 0}
            <Text>Event Name</Text>
            <TextInput
              style={Style.text}
              name="name"
              type="text"
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ name: text });
              }}
              value={this.state.name}
            />
            {this.state.address.length === 0}
            <Text>Event Street Address</Text>
            <TextInput
              style={Style.text}
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ address: text });
              }}
              value={this.state.address}
            />
            {this.state.city.length === 0}
            <Text>Event City</Text>
            <TextInput
              style={Style.text}
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ city: text });
              }}
              value={this.state.city}
            />
            {this.state.state.length === 0}
            <Text>Event State</Text>
            <TextInput
              style={Style.text}
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ state: text });
              }}
              value={this.state.state}
            />
            {!this.isValidUSZip(this.state.zipcode)}
            <Text>Event Zip Code</Text>
            <TextInput
              style={Style.text}
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ zipcode: text });
              }}
              value={this.state.zipcode}
            />
            {this.state.date.length === 0}
            <Text>Event Date</Text>
            <Button
              onPress={() => {
                this.setState({ isDatePickerVisible: true });
              }}
              title="Select A Date"
            />
            <Text style={Style.text}>{this.state.date}</Text>
            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              onConfirm={(date) => {
                this.setState({
                  date: date.toUTCString(),
                  isDatePickerVisible: false,
                });
              }}
              onCancel={() => {
                this.setState({ isDatePickerVisible: false });
              }}
              mode="date"
            />
            {this.state.time.length === 0}
            <Text>Event Time</Text>
            <Button
              onPress={() => {
                this.setState({ isTimePickerVisible: true });
              }}
              title="Select Time"
            />
            <Text style={Style.text}>{this.state.time}</Text>
            <DateTimePickerModal
              isVisible={this.state.isTimePickerVisible}
              onConfirm={(time) => {
                this.setState({
                  time: time.toTimeString(),
                  isTimePickerVisible: false,
                });
              }}
              onCancel={() => {
                this.setState({ isTimePickerVisible: false });
              }}
              mode="time"
            />
            {this.state.description.length === 0}
            <Text>Event Description</Text>
            <TextInput
              multiline={true}
              style={{
                height: Math.max(35, this.state.height),
                ...Fonts.normal,
                ...Metrics.bottomMargin,
                color: Colors.blue,
              }}
              onContentSizeChange={(event) => {
                this.setState({ height: event.nativeEvent.contentSize.height });
              }}
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ description: text });
              }}
              value={this.state.description}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            {this.state.category.length === 0}
            <Text>Event Category</Text>
            <RNPickerSelect
              onValueChange={(category) => {
                this.setState({ category: category });
              }}
              placeholder={{
                label: "Select Category",
                value: null,
              }}
              items={[
                { label: "Food", value: "Food" },
                { label: "Education", value: "Education" },
                { label: "Fitness", value: "Fitness" },
                { label: "Entertainment", value: "Entertainment" },
              ]}
            />
            <Text style={Style.text}>{this.state.category}</Text>
          </View>

          <Button title="Update Event" onPress={this.handleSubmit}></Button>

          <Modal isVisible={this.state.isModalVisible} style={Style.modal}>
            <View>
              <Image
                source={require("../../assets/ebuddies.gif")}
                style={Style.logo}
              />
              <View style={Style.modalText}>
                <Text style={{ ...Fonts.h4 }}>
                  Event, {this.state.name} has been successfully updates!
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
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  event: state.event,
});

const mapDispatch = (dispatch) => ({
  updateEvent: (id, updateEvent) => dispatch(fetchUpdateEvent(id, updateEvent)),
  fetchEvent: (id) => dispatch(fetchEvent(id)),
});

export default connect(mapStateToProps, mapDispatch)(AddEventScreen);
