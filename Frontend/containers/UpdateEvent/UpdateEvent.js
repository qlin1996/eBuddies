import React from "react";
import { TextInput, View, Button, ScrollView, Text, Image } from "react-native";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import {
  fetchUpdateEvent,
  fetchSingleEvent,
  deleteEvent,
} from "../../store/event";
import styles from "./UpdateEventScreenStyle";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Metrics, Fonts, Colors } from "../../themes";
import RNPickerSelect from "react-native-picker-select";
import { getAllEvents } from "../../store/events";
import { Appbar, Surface } from "react-native-paper";
import {
  Zocial,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

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

  async componentDidMount() {
    await this.props.fetchSingleEvent(this.props.navigation.getParam("id"));
    this.setState({
      hostId: this.props.user.id,
      name: this.props.event.name,
      address: this.props.event.address,
      city: this.props.event.city,
      state: this.props.event.state,
      zipCode: this.props.event.zipCode,
      date: this.props.event.date,
      time: this.props.event.time,
      category: this.props.event.category,
      description: this.props.event.description,
      imgUrl: this.props.event.imgUrl,
      eventId: this.props.event.id,
    });
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
      this.state.zipCode.length &&
      this.state.date.length &&
      this.state.time.length &&
      this.state.category.length &&
      this.state.description.length
    ) {
      await this.props.updateEvent(this.state.eventId, this.state);
      this.setState({ isModalVisible: true });
      const waitForModal = () => {
        this.props.navigation.navigate("EVENTS");
        this.setState({
          isModalVisible: false,
        });
      };
      setTimeout(waitForModal, 2000);
    }
  };

  handleDelete = async () => {
    await this.props.deleteEvent(this.state.eventId);
    await this.props.getAllEvents();
    this.props.navigation.navigate("EVENTS");
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
            <Appbar.Content title="Edit Event" color="white" />
          </Appbar.Header>
          <Image
            style={styles.image}
            source={{
              uri: uri,
            }}
          />

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
            value={this.state.city}
            placeholderTextColor="#4d4a4a"
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
                color: "#4d4a4a",
                label: "Select State...",
                value: null,
              }}
              style={{
                placeholder: { color: "#4d4a4a", fontSize: 16 },
                inputIOS: { color: "#4d4a4a", fontSize: 16 },
                inputAndroid: { color: "#4d4a4a", fontSize: 16 },
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
                date: date.toUTCString(),
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
            <Text style={styles.textTime}>{this.state.time}</Text>
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
              paddingBottom: 40,
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

          <Button title="Update Event" onPress={this.handleSubmit}></Button>

          <View style={{ marginBottom: 70 }}>
            <Button title="Delete Event" onPress={this.handleDelete}></Button>
          </View>

          <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
            <View>
              <View style={styles.modalText}>
                <Text style={{ ...Fonts.h4 }}>
                  Event, {this.state.name} has been successfully updates!
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
  event: state.event,
});

const mapDispatch = (dispatch) => ({
  updateEvent: (id, updateEvent) => dispatch(fetchUpdateEvent(id, updateEvent)),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  getAllEvents: () => dispatch(getAllEvents()),
});

export default connect(mapStateToProps, mapDispatch)(AddEventScreen);
