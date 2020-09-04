import React from "react";
import { View, Button, TextInput, Image, ScrollView, Text } from "react-native";
import styles from "./SignupTwoScreenStyle";
import { Fonts } from "../../themes";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import RNPickerSelect from "react-native-picker-select";

class SignupTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      imgUrl: "",
      city: "",
      state: "",
      zipCode: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    this.setState({
      description: "",
      imgUrl: "",
      city: "",
      state: "",
      zipCode: "",
      firstName: this.props.navigation.getParam("firstName"),
      lastName: this.props.navigation.getParam("lastName"),
      email: this.props.navigation.getParam("email"),
      password: this.props.navigation.getParam("password"),
    });
  }

  isValidUSZip = (zipCode) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  };

  handleSignup2 = async () => {
    if (
      this.state.city.length &&
      this.state.state.length &&
      this.isValidUSZip(this.state.zipCode)
    ) {
      this.props.navigation.navigate("INTERESTS", this.state);
      this.setState({
        description: "",
        imgUrl: "",
        city: "",
        state: "",
        zipCode: "",
      });
    }
  };

  handleLogin = () => {
    this.props.navigation.navigate("LOGIN");
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
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/ebuddies.gif")}
            style={styles.logo}
          />
          <View style={styles.background}>
            {this.state.city.length === 0 && <Text>City is Required</Text>}
            {this.state.state.length === 0 && <Text>State is Required</Text>}
            {!this.isValidUSZip(this.state.zipCode) && (
              <Text>Valid US Zip Code is Required</Text>
            )}
            <TextInput
              style={{
                ...Fonts.normal,
                height: 50,
                backgroundColor: "rgb(235, 233, 233)",
                borderBottomWidth: 0.5,
                borderBottomColor: "rgba(38,153,251,1)",
                marginHorizontal: 40,
                marginBottom: 20,
                color: "rgba(38,153,251,1)",
                paddingHorizontal: 10,
              }}
              value={this.state.city}
              onChangeText={(city) => this.setState({ city })}
              ref={(input) => {
                this.textInput = input;
              }}
              returnKeyType="go"
              placeholder="City"
              placeholderTextColor="rgba(38,153,251,1)"
              keyboardType="name-phone-pad"
            />

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

            <TextInput
              style={{
                ...Fonts.normal,
                height: 50,
                backgroundColor: "rgb(235, 233, 233)",
                borderBottomWidth: 0.5,
                borderBottomColor: "rgba(38,153,251,1)",
                marginHorizontal: 40,
                marginBottom: 20,
                color: "rgba(38,153,251,1)",
                paddingHorizontal: 10,
              }}
              value={this.state.zipCode}
              onChangeText={(zipCode) => this.setState({ zipCode })}
              ref={(input) => {
                this.textInput = input;
              }}
              returnKeyType="go"
              placeholder="ZipCode"
              placeholderTextColor="rgba(38,153,251,1)"
              keyboardType="name-phone-pad"
            />

            <TextInput
              style={{
                ...Fonts.normal,
                height: 50,
                backgroundColor: "rgb(235, 233, 233)",
                borderBottomWidth: 0.5,
                borderBottomColor: "rgba(38,153,251,1)",
                marginHorizontal: 40,
                marginBottom: 20,
                color: "rgba(38,153,251,1)",
                paddingHorizontal: 10,
              }}
              value={this.state.description}
              onChangeText={(description) => this.setState({ description })}
              ref={(input) => {
                this.textInput = input;
              }}
              returnKeyType="go"
              placeholder="Short Description"
              placeholderTextColor="rgba(38,153,251,1)"
              keyboardType="name-phone-pad"
            />
            <View style={styles.selectPic}>
              <Text>📸</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: this.state.imgUrl,
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                color="white"
                style={{ ...Fonts.normal, textAlign: "center" }}
                title="CONTINUE"
                onPress={this.handleSignup2}
              >
                CONTINUE
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignupTwo;
