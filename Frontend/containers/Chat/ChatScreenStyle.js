import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  screenWrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.lightBlue,
    paddingVertical: 10,
  },
  welcomeChat: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  userImage: {
    display: "flex",
    resizeMode: "cover",
    width: 40,
    height: 40,
    borderRadius: 10,
    borderColor: "white",
    margin: 3,
    marginLeft: 10,
  },
  imageContainer: {
    ...Helpers.crossCenter,
    ...Metrics.verticalPadding,
    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
  },
  chatMessages: {
    display: "flex",
    top: 70,
    paddingBottom: 20,
    flexDirection: "row",
  },
  chatMessage: {
    alignItems: "center",
    backgroundColor: "white",
    width: 100,
    borderWidth: 1,
    borderColor: "lightblue",
    borderRadius: 5,
    padding: 7,
    marginLeft: 3,
  },
  textInputWrapper: {
    top: 0,
    width: 395,
    marginBottom: 10,
  },
  textInput: {
    top: 0,
    left: 10,
    height: 50,
    width: 400,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "lightblue",
    position: "absolute",
    backgroundColor: Colors.lightBlue,
    marginBottom: 50,
    paddingLeft: 7,
  },
  sendMessageButton: {
    top: 7,
    left: 300,
    width: 100,
    borderColor: "white",
    position: "absolute",
  },
});
