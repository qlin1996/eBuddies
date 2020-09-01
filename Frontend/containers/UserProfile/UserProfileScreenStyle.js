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
  image: {
    // width: 200,
    height: 200,
    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
  },
  profileContainer: {
    ...Metrics.mediumVerticalMargin,
    ...Metrics.mediumHorizontalMargin,
  },
  name: {
    color: Colors.blue,
    fontWeight: "bold",
    ...Fonts.h3,
    alignSelf: "center",
    textAlign: "center",
  },
  location: {
    color: Colors.blue,
    alignSelf: "center",
    textAlign: "center",
  },
  description: {
    color: Colors.blue,
    ...Fonts.normal,
    marginTop: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  interestsContainer: {
    // backgroundColor: Colors.lightBlue,
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
    alignSelf: "center",
    textAlign: "center",
  },
  hosted: {
    position: "relative",
    top: "40%",
    left: "-20%",
  },
  edit: {
    top: "3%",
    alignSelf: "center",
  },
  logoutbutton: {
    alignSelf: "center",
  },
  separator: {
    position: "relative",
    top: "1.5%",
    left: "45.5%",
  },
  interests: {
    color: Colors.blue,
    ...Fonts.normal,
    fontWeight: "bold",
    ...Metrics.bottomMargin,
    alignSelf: "center",
    textAlign: "center",
  },
  interestContainer: {
    flexDirection: "row",
  },
  interest: {
    color: Colors.blue,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    marginRight: 10,
    alignSelf: "center",
    textAlign: "center",
  },
});
