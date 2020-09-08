import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  screenWrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.lightBlue,
    paddingVertical: 10,
  },
  appHeader: {
    // backgroundColor: "lightblue",
    backgroundColor: "rgb(38,153,251)",
    height: 65,
  },
  container1: {
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 18,
    marginRight: 18,
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
    paddingBottom: 8,
    flexDirection: "row",
    width: "60%",
  },
  chatMessage: {
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    borderWidth: 1,
    borderColor: "lightblue",
    borderRadius: 5,
    padding: 7,
    marginLeft: "50%",
  },
  surface: {
    marginTop: 0,
    marginLeft: "5%",
    width: "90%",
    borderColor: "white",
  },

  textInput: {
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "lightblue",
    backgroundColor: "white",
  },
  surfaceButton: {
    marginLeft: "5%",
    width: "30%",
    marginTop: -45,
    marginLeft: 263,
    borderColor: "white",
  },
});
