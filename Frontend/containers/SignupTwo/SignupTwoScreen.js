import React from "react";
import { View, Button, TextInput, Image, ScrollView, Text } from "react-native";
import styles from "./SignupTwoScreenStyle";
import { Fonts } from "../../themes";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import RNPickerSelect from "react-native-picker-select";
import { Appbar, Card, Surface } from "react-native-paper";
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
            <Appbar.Content title="Sign up" subtitle="(2/3)" color="white" />
          </Appbar.Header>
          <TextInput
            style={styles.textInputCity}
            value={this.state.city}
            onChangeText={(city) => this.setState({ city })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="City..."
            placeholderTextColor="#4d4a4a"
            keyboardType="name-phone-pad"
          />
          <Image
            style={styles.city}
            source={require("../../assets/city.png")}
          />
          {this.state.city.length === 0 && (
            <Text style={styles.validators}>City is Required</Text>
          )}
          <View style={styles.textInput}>
            <RNPickerSelect
              onValueChange={(state) => {
                this.setState({ state: state });
              }}
              placeholder={{
                color: "#4d4a4a",
                label: "State...",
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
          <Image
            style={styles.state}
            source={require("../../assets/state.png")}
          />
          {this.state.state.length === 0 && (
            <Text style={styles.validators}>State is Required</Text>
          )}

          <TextInput
            style={styles.textInput}
            value={this.state.zipCode}
            onChangeText={(zipCode) => this.setState({ zipCode })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Zip Code..."
            placeholderTextColor="#4d4a4a"
            keyboardType="name-phone-pad"
          />
          <Image style={styles.zip} source={require("../../assets/zip.png")} />
          {!this.isValidUSZip(this.state.zipCode) && (
            <Text style={styles.validators}>Valid US Zip Code is Required</Text>
          )}

          <TextInput
            style={styles.textInput}
            value={this.state.description}
            onChangeText={(description) => this.setState({ description })}
            ref={(input) => {
              this.textInput = input;
            }}
            returnKeyType="go"
            placeholder="Description..."
            placeholderTextColor="#4d4a4a"
            keyboardType="name-phone-pad"
          />
          <Image
            style={styles.description}
            source={require("../../assets/description.png")}
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
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: uri,
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.normal, textAlign: "center" }}
              title="CONTINUE"
              onPress={this.handleSignup2}
            >
              CONTINUE
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignupTwo;
