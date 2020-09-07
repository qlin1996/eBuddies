import React from "react";
import { TextInput, View, Button, ScrollView, Text, Image } from "react-native";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { postNewEvent } from "../../store/events";
import Style from "./AddEventScreenStyle";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Metrics, Fonts, Colors } from "../../themes";
import RNPickerSelect from "react-native-picker-select";
import * as Notifications from "expo-notifications";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

class AddEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.pickerRef = React.createRef();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
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

  componentDidMount() {
    this.setState({ hostId: this.props.user.id });
  }
  sendPushNotification = async (pushToken) => {
    const eventHour = Number(this.state.time.slice(0, 2));
    const eventMinute = Number(this.state.time.slice(3, 5) - 1);

    let gmt = this.state.time.slice(8);

    let trigger = new Date(
      this.state.date.slice(0, 15) +
        " " +
        eventHour +
        ": " +
        eventMinute +
        ":00" +
        gmt
    );

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "eBuddies",
        body: "Your event will start soon. Please review the atendee list!",
        data: { data: "goes here" },
        sound: "default",
      },
      trigger,
    });
  };

  isValidUSZip = (zipCode) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  };
  handleSubmit = async () => {
    if (
      this.state.name.length &&
      this.state.address.length &&
      this.state.city.length &&
      this.state.state.length &&
      this.state.zipCode.length &&
      this.state.date.length &&
      this.state.time.length &&
      this.state.category.length &&
      this.state.description.length
    ) {
      this.setState({ isModalVisible: true, hostId: this.props.user.id });
      this.props.postNewEvent(this.state);
      await this.sendPushNotification(this.props.user.pushToken);

      const waitForModal = () => {
        this.props.navigation.navigate("EVENTS");
        this.setState({
          isModalVisible: false,
          name: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          date: "",
          time: "",
          description: "",
          eventId: "",
          imgUrl: "",
          hostId: "",
          selectedValue: "Food",
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
            {this.state.name.length === 0 && (
              <Text style={{ color: "red" }}>Event Name is Required</Text>
            )}
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
            {this.state.address.length === 0 && (
              <Text style={{ color: "red" }}>
                Event Street Address is Required
              </Text>
            )}
            <Text>Event Street Address</Text>
            <TextInput
              style={Style.text}
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ address: text });
              }}
              value={this.state.address}
            />
            {this.state.city.length === 0 && (
              <Text style={{ color: "red" }}>Event City is Required</Text>
            )}
            <Text>Event City</Text>
            <TextInput
              style={Style.text}
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ city: text });
              }}
              value={this.state.city}
            />

            {this.state.state.length === 0 && (
              <Text style={{ color: "red" }}>Event State is Required</Text>
            )}
            <Text>Event State</Text>
            <RNPickerSelect
              onValueChange={(state) => {
                this.setState({ state: state });
              }}
              placeholder={{
                label: "Select State",
                value: null,
              }}
              items={[
                { label: "Alabama", value: "Alabama" },
                { label: "Alaska", value: "Alaska" },
                { label: " Arizona", value: " Arizona" },
                { label: "Arkansas", value: "Arkansas" },
                { label: "California", value: "California" },
                { label: "Colorado", value: "Colorado" },
                { label: "Connecticut", value: "Connecticut" },
                { label: "Delaware", value: "Delaware" },
                { label: "Florida", value: "Florida" },
                { label: "Georgia", value: "Georgia" },

                { label: "Hawaii", value: "Hawaii" },
                { label: "Idaho", value: "Idaho" },
                { label: "Illinois", value: "Illinois" },
                { label: "Indiana", value: "Indiana" },
                { label: "Iowa", value: "Iowa" },
                { label: "Kansas", value: "Kansas" },
                { label: "Kentucky", value: "Kentucky" },
                { label: "Louisiana", value: "Louisiana" },
                { label: "Maine", value: "Maine" },
                { label: "Maryland", value: "Maryland" },

                { label: "Massachusetts", value: "Massachusetts" },
                { label: "Michigan", value: "Michigan" },
                { label: "Minnesota", value: "Minnesota" },
                { label: "Mississippi", value: "Mississippi" },
                { label: "Missouri", value: "Missouri" },
                { label: "Montana", value: "Montana" },
                { label: "Nebraska", value: "Nebraska" },
                { label: "Nevada", value: "Nevada" },
                { label: "New Hampshire", value: "New Hampshire" },
                { label: "New Jersey", value: "New Jersey" },

                { label: "New Mexico", value: "New Mexico" },
                { label: "New York", value: "New York" },
                { label: "North Carolina", value: "North Carolina" },
                { label: "North Dakota", value: "North Dakota" },
                { label: "Ohio", value: "Ohio" },
                { label: "Oklahoma", value: "Oklahoma" },
                { label: "Oregon", value: "Oregon" },
                { label: "Pennsylvania", value: "Pennsylvania" },
                { label: "Pennsylvania", value: "Pennsylvania" },
                { label: "South Carolina", value: "South Carolina" },
              ]}
            />

            {!this.isValidUSZip(this.state.zipCode) && (
              <Text style={{ color: "red" }}>
                Valid US Zip Code is Required
              </Text>
            )}
            <Text>Event Zip Code</Text>
            <TextInput
              style={Style.text}
              placeholder="Type Here"
              onChangeText={(text) => {
                this.setState({ zipCode: text });
              }}
              value={this.state.zipCode}
            />
            {this.state.date.length === 0 && (
              <Text style={{ color: "red" }}>Event Date is Required</Text>
            )}
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
                console.log("DATE TO DATE STRING", date.toDateString());
                this.setState({
                  date: date.toDateString(),
                  isDatePickerVisible: false,
                });
              }}
              onCancel={() => {
                this.setState({ isDatePickerVisible: false });
              }}
              mode="date"
            />
            {this.state.time.length === 0 && (
              <Text style={{ color: "red" }}>Event Time is Required</Text>
            )}
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
            {this.state.description.length === 0 && (
              <Text style={{ color: "red" }}>
                Event Description is Required
              </Text>
            )}
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
            {this.state.category.length === 0 && (
              <Text style={{ color: "red" }}>Event category is Required</Text>
            )}
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

          <Button title="Add Event" onPress={this.handleSubmit}></Button>

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
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  postNewEvent: (addEventForm) => dispatch(postNewEvent(addEventForm)),
});

export default connect(mapStateToProps, mapDispatch)(AddEventScreen);
