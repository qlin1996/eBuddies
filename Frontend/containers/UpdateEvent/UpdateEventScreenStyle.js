import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  imageContainer: {
    ...Helpers.crossCenter,
    ...Metrics.verticalPadding,
    width: "70%",
    alignSelf: "center",
  },
  image: {
    height: 200,
    width: "70%",
    alignSelf: "center",
  },
  eventContainer: {
    ...Metrics.mediumVerticalMargin,
    ...Metrics.mediumHorizontalMargin,
  },
  text: {
    ...Fonts.normal,
    ...Metrics.bottomMargin,
    color: Colors.blue,
  },
  modal: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    top: "15%",
    height: "50%",
    bottom: 0,
    backgroundColor: "white",
  },
  modalText: {
    alignSelf: "center",
    fontSize: 50,
    width: "75%",
    textAlign: "center",
  },
  logo: {
    position: "absolute",
    top: "-23%",
    left: "22%",
  },
  image2: {
    width: "46%",
    alignSelf: "center",
    position: "relative",
    top: "3%",
    height: 175,
    borderRadius: 150,
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: Colors.lightBlue,
  },
});
