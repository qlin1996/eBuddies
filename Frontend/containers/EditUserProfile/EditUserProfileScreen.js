import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Appbar, Surface } from "react-native-paper";
import { connect } from "react-redux";
import Style from "./EditUserProfileScreenStyle";
import styles from "./EditUserProfileScreenStyle";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { updateUser } from "../../store/user";
import { deleteAllInterests, postNewInterest } from "../../store/interest";
import RNPickerSelect from "react-native-picker-select";
import { Metrics, Fonts, Colors } from "../../themes";
import S3 from "aws-sdk/clients/s3";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

class EditUserProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zipCode: "",
      description: "",
      Food: false,
      Education: false,
      Fitness: false,
      Entertainment: false,
      imgUrl: "",
      height: 0,
    };
  }

  async componentDidMount() {
    let keys = [];
    this.props.interests.forEach((interest) => {
      keys.push(interest.userInterest);
    });
    this.setState({
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      city: this.props.user.city,
      state: this.props.user.state,
      zipCode: this.props.user.zipCode,
      description: this.props.user.description,
      Food: keys.includes("Food"),
      Education: keys.includes("Education"),
      Fitness: keys.includes("Fitness"),
      Entertainment: keys.includes("Entertainment"),
      imgUrl: this.props.user.imgUrl,
      hostId: this.props.user.id,
    });
  }

  isValidUSZip = (zipCode) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  };

  updateChoice = (interest) => {
    let newState = { ...this.state };
    newState[interest] = !newState[interest];
    this.setState(newState);
  };

  uploadImageOnS3 = async (file) => {
    const s3bucket = new S3({
      accessKeyId: "",
      secretAccessKey: "",
      Bucket: "ebuddies",
      signatureVersion: "v4",
    });

    // let contentType = "image/jpeg";
    // let contentDeposition = 'inline;filename="' + file.name + '"';
    // const base64 = await fs.readFile(file.uri, "base64");
    // const arrayBuffer = decode(base64);

    // s3bucket.createBucket(() => {
    //   const params = {
    //     Bucket: "ebuddies",
    //     Key: file.name,
    //     Body: arrayBuffer,
    //     ContentDisposition: contentDeposition,
    //     ContentType: contentType,
    //   };

    //   s3bucket.upload(params, (err, data) => {
    //     if (err) {
    //       console.log("error in callback");
    //     }
    //     console.log("success");
    //     console.log("Respomse URL : " + data.Location);
    //   });
    // });
  };

  selectPicture = async () => {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: 1,
      });
      this.setState({ imgUrl: uri });
      console.log("IAMGE URI", uri);
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

  handleUpdate = async () => {
    if (
      this.state.firstName.length &&
      this.state.lastName.length &&
      this.state.city.length &&
      this.state.state.length &&
      this.isValidUSZip(this.state.zipCode)
    ) {
      await this.props.updateUser(this.props.user.id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        description: this.state.description,
        imgUrl: this.state.imgUrl,
      });
      await this.props.deleteAllInterests(this.props.user.id);
      if (this.state.Food === true) {
        await this.props.postNewInterest({
          userId: this.props.user.id,
          userInterest: "Food",
        });
      }
      if (this.state.Education === true) {
        await this.props.postNewInterest({
          userId: this.props.user.id,
          userInterest: "Education",
        });
      }
      if (this.state.Fitness === true) {
        await this.props.postNewInterest({
          userId: this.props.user.id,
          userInterest: "Fitness",
        });
      }
      if (this.state.Entertainment === true) {
        await this.props.postNewInterest({
          userId: this.props.user.id,
          userInterest: "Entertainment",
        });
      }
      this.props.navigation.navigate("PROFILE");
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

          <View style={styles.imageContainer}>
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
            placeholder="First Name..."
            selectionColor="#428AF8"
            placeholderTextColor="#4d4a4a"
            style={styles.textInputName}
            returnKeyType="go"
            value={this.state.firstName}
            onChangeText={(firstName) => this.setState({ firstName })}
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <Ionicons name="md-person" size={20} style={styles.name} />
          {this.state.firstName.length === 0 && (
            <Text style={styles.validatorName}>First Name is Required</Text>
          )}

          <TextInput
            returnKeyType="go"
            style={styles.textInput}
            selectionColor="#428AF8"
            placeholder="Last Name..."
            placeholderTextColor="#4d4a4a"
            value={this.state.lastName}
            onChangeText={(lastName) => this.setState({ lastName })}
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <Ionicons name="md-person" size={20} style={styles.name} />
          {this.state.lastName.length === 0 && (
            <Text style={styles.validatorName}>Last Name is Required</Text>
          )}

          <TextInput
            returnKeyType="go"
            style={styles.textInput}
            selectionColor="#428AF8"
            placeholder="City..."
            placeholderTextColor="#4d4a4a"
            value={this.state.city}
            onChangeText={(city) => this.setState({ city })}
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <Entypo name="location-pin" size={22} style={styles.pin} />
          {this.state.city.length === 0 && (
            <Text style={styles.validators}>City is Required</Text>
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
            <Text style={styles.validators}>State is Required</Text>
          )}

          <TextInput
            returnKeyType="go"
            style={styles.textInput}
            placeholder="Zip Code..."
            selectionColor="#428AF8"
            placeholderTextColor="#4d4a4a"
            value={this.state.zipCode}
            onChangeText={(zipCode) => this.setState({ zipCode })}
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <Entypo name="location-pin" size={22} style={styles.pin} />
          {!this.isValidUSZip(this.state.zipCode) && (
            <Text style={styles.validators}>Valid US Zip Code is Required</Text>
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
            onContentSizeChange={(event) => {
              this.setState({ height: event.nativeEvent.contentSize.height });
            }}
            value={this.state.description}
            onChangeText={(description) => this.setState({ description })}
            ref={(input) => {
              this.textInput = input;
            }}
          />
          <MaterialIcons name="short-text" size={22} style={styles.pin} />

          <Text style={styles.interests}>INTERESTS</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.updateChoice("Food");
              }}
            >
              <Text
                style={
                  this.state.Food ? styles.interestSelected : styles.interest
                }
              >
                Food
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.updateChoice("Entertainment");
              }}
            >
              <Text
                style={
                  this.state.Entertainment
                    ? styles.interestSelected
                    : styles.interest
                }
              >
                Entertainment
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.updateChoice("Education");
              }}
            >
              <Text
                style={
                  this.state.Education
                    ? styles.interestSelected
                    : styles.interest
                }
              >
                Education
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.updateChoice("Fitness");
              }}
            >
              <Text
                style={
                  this.state.Fitness ? styles.interestSelected : styles.interest
                }
              >
                Fitness
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 30, marginBottom: 50 }}>
            <Button
              title="Update My Profile"
              onPress={this.handleUpdate}
            ></Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  interests: state.interests,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (id, updateData) => {
    return dispatch(updateUser(id, updateData));
  },
  deleteAllInterests: (userId) => {
    return dispatch(deleteAllInterests(userId));
  },
  postNewInterest: (interestObj) => {
    return dispatch(postNewInterest(interestObj));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfileScreen);
