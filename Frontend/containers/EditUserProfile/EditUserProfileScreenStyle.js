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
    height: 200,
    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
  },
  profileContainer: {
    ...Metrics.mediumVerticalMargin,
    ...Metrics.mediumHorizontalMargin,
  },
  text: {
    ...Fonts.normal,
    ...Metrics.bottomMargin,
    color: Colors.blue,
  },
  interestsContainer: {
    // backgroundColor: Colors.lightBlue,
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
  },
  interests: {
    color: Colors.blue,
    ...Fonts.normal,
    fontWeight: "bold",
    ...Metrics.bottomMargin,
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
  },
  interestSelected: {
    color: Colors.blue,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    marginRight: 10,
    backgroundColor: Colors.lightBlue,
  },
});
