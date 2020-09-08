import React from "react";
import {
  TextInput,
  View,
  Button,
  ScrollView,
  Text,
  Image,
  Vibration,
} from "react-native";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { postNewEvent } from "../../store/events";
import styles from "./AddEventScreenStyle";
import { Appbar, Surface } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Metrics, Fonts, Colors } from "../../themes";
import RNPickerSelect from "react-native-picker-select";
import * as Notifications from "expo-notifications";
import {
  Zocial,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

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
    const subscription = Notifications.addNotificationResponseReceivedListener(
      () => {
        this.props.navigation.navigate("ATTENDEES");
      }
    );
    return () => subscription.remove();
  }
  sendPushNotification = async (pushToken) => {
    Vibration.vibrate(10 * 3000);
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

  takePicture = async () => {
    try {
      await Permissions.askAsync(Permissions.CAMERA);
      const { cancelled, uri } = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: 1,
      });
      this.setState({ imgUrl: uri });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const uri =
      this.state.imgUrl ||
      "https://www.actuall.eu/wp-content/uploads/2016/10/cropped-White-box.jpg";
    return (
      <ScrollView>
        <View style={styles.container1}>
          <Appbar.Header style={styles.appHeader}>
            <Appbar.Content title="Add Event" color="white" />
          </Appbar.Header>

          <View>
            <Image
              style={styles.image}
              source={{
                uri: uri,
              }}
            />
          </View>

          <View style={styles.picOption}>
            <Surface style={styles.surface1}>
              <Button
                title="Select Picture"
                color="rgba(38,153,251,1)"
                onPress={this.selectPicture}
              />
            </Surface>
            <Surface style={styles.surface2}>
              <Button
                title="Take Picture"
                color="rgba(38,153,251,1)"
                onPress={this.takePicture}
              />
            </Surface>
          </View>

          <TextInput
            style={styles.textInputName}
            selectionColor="#428AF8"
            name="name"
            type="text"
            placeholder="Event Name..."
            placeholderTextColor="#4d4a4a"
            onChangeText={(text) => {
              this.setState({ name: text });
            }}
            value={this.state.name}
            returnKeyType="go"
          />
          <Zocial name="eventful" size={13} style={styles.name} />
          {this.state.name.length === 0 && (
            <Text style={styles.validatorName}>Event Name is Required</Text>
          )}

          <TextInput
            returnKeyType="go"
            style={styles.textInput}
            selectionColor="#428AF8"
            placeholder="Event Street Address..."
            placeholderTextColor="#4d4a4a"
            onChangeText={(text) => {
              this.setState({ address: text });
            }}
            value={this.state.address}
          />
          <Entypo name="location-pin" size={22} style={styles.pin} />
          {this.state.address.length === 0 && (
            <Text style={styles.validators}>
              Event Street Address is Required
            </Text>
          )}

          <TextInput
            returnKeyType="go"
            style={styles.textInput}
            selectionColor="#428AF8"
            placeholder="Event City..."
            onChangeText={(text) => {
              this.setState({ city: text });
            }}
            placeholderTextColor="#4d4a4a"
            value={this.state.city}
          />
          <Entypo name="location-pin" size={22} style={styles.pin} />
          {this.state.city.length === 0 && (
            <Text style={styles.validators}>Event City is Required</Text>
          )}

          <View style={styles.selectState}>
            <RNPickerSelect
              onValueChange={(state) => {
                this.setState({ state: state });
              }}
              placeholder={{
                label: "Select State",
                value: null,
              }}
              placeholderTextColor="#4d4a4a"
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
          </View>
          <Entypo name="location-pin" size={22} style={styles.pin} />
          {this.state.state.length === 0 && (
            <Text style={styles.validators}>Event State is Required</Text>
          )}

          <TextInput
            returnKeyType="go"
            style={styles.textInput}
            placeholder="Event Zip Code..."
            selectionColor="#428AF8"
            placeholderTextColor="#4d4a4a"
            onChangeText={(text) => {
              this.setState({ zipCode: text });
            }}
            value={this.state.zipCode}
          />
          <Entypo name="location-pin" size={22} style={styles.pin} />
          {!this.isValidUSZip(this.state.zipCode) && (
            <Text style={styles.validators}>Valid US Zip Code is Required</Text>
          )}

          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            onConfirm={(date) => {
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

          <View style={styles.selectDate}>
            <Text
              style={styles.date}
              onPress={() => {
                this.setState({ isDatePickerVisible: true });
              }}
            >
              Select Date
            </Text>
            <Text
              style={{
                borderColor: "#BEBEBE",
                borderBottomWidth: 1,
                width: "85%",
                fontSize: 16,
                color: "#4d4a4a",
              }}
            >
              {this.state.date}
            </Text>
          </View>
          <MaterialIcons name="date-range" size={22} style={styles.pin} />
          {this.state.date.length === 0 && (
            <Text style={styles.validatorDate}>Event Date is Required</Text>
          )}

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
          <View style={styles.selectTime}>
            <Text
              style={styles.time}
              onPress={() => {
                this.setState({ isTimePickerVisible: true });
              }}
            >
              Select Time
            </Text>
            <Text style={styles.textInput}>{this.state.time}</Text>
          </View>
          <MaterialIcons name="access-time" size={22} style={styles.pin} />
          {this.state.time.length === 0 && (
            <Text style={styles.validatorTime}>Event Time is Required</Text>
          )}

          <TextInput
            returnKeyType="go"
            multiline={true}
            style={{
              height: Math.max(30, this.state.height),
              color: "#4d4a4a",
              marginLeft: 30,
              marginRight: 30,
              borderColor: "#BEBEBE",
              letterSpacing: 1,
              textAlign: "left",
              fontSize: 16,
              borderBottomWidth: 1,
              width: "80%",
            }}
            selectionColor="#428AF8"
            placeholderTextColor="#4d4a4a"
            onContentSizeChange={(event) => {
              this.setState({ height: event.nativeEvent.contentSize.height });
            }}
            placeholder="Event Description..."
            onChangeText={(text) => {
              this.setState({ description: text });
            }}
            value={this.state.description}
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <MaterialIcons name="short-text" size={22} style={styles.pin} />
          {this.state.description.length === 0 && (
            <Text style={styles.validatorDescription}>
              Event Description is Required
            </Text>
          )}

          <View style={styles.selectState}>
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
          </View>
          <SimpleLineIcons
            name="options-vertical"
            size={18}
            style={styles.pin}
          />
          {this.state.category.length === 0 && (
            <Text style={styles.validatorCategory}>
              Event category is Required
            </Text>
          )}

          <View style={{ marginBottom: 70 }}>
            <Button title="Add Event" onPress={this.handleSubmit}></Button>
          </View>

          <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
            <View>
              <Image
                source={require("../../assets/ebuddies.gif")}
                style={styles.logo}
              />
              <View style={styles.modalText}>
                <Text style={{ ...Fonts.h4 }}>
                  Event, {this.state.name} has been added!
                </Text>
              </View>
              <Image
                style={styles.image2}
                source={{
                  uri: uri,
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
