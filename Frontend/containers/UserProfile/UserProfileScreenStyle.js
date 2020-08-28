import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  imageContainer: {
    ...Helpers.crossCenter,
    backgroundColor: Colors.mediumBlue,
    ...Metrics.verticalPadding,
  },
  image: {
    width: 200,
    height: 200,
  },
  profileContainer: {
    ...Metrics.mediumVerticalMargin,
    ...Metrics.mediumHorizontalMargin,
  },
  name: {
    color: Colors.blue,
    fontWeight: "bold",
    ...Fonts.h3,
  },
  location: {
    color: Colors.blue,
  },
  description: {
    color: Colors.blue,
    ...Fonts.normal,
    marginTop: 30,
  },
  interestsContainer: {
    backgroundColor: Colors.lightBlue,
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
});
