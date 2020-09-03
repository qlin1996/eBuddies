import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  imageContainer: {
    ...Helpers.crossCenter,
    // backgroundColor: Colors.mediumBlue,
    ...Metrics.verticalPadding,

    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
  },

  textInput: {
    height: 50,
    borderWidth: 2,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "lightblue",
    position: "absolute",
    top: 500,
    left: 10,
    width: 395,
    backgroundColor: "white",
  },

  welcomeChat: {
    fontSize: 22,
    textAlign: "center",
  },

  userImage: {
    resizeMode: "cover",
    width: "8%",
    height: 30,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    // positiion: "absolute",
    left: -1,
    margin: 3,
    padding: 3,
    top: 5,
  },
  chatMessage: {
    backgroundColor: "white",
    top: "10%",
    position: "absolute",
    height: 35,
    width: "80%",
    borderWidth: 1,
    borderColor: "lightblue",
    borderRadius: 5,
    left: 40,
    textAlign: "center",
    padding: 2,
    margin: 2,
  },

  sendMessageButton: {
    top: 505,
    left: 300,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    position: "absolute",
    backgroundColor: "white",
    width: "20%",
    borderRadius: 10,
  },
});