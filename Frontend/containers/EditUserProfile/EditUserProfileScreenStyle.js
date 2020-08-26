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
  text: {
    ...Fonts.normal,
    ...Metrics.tinyVerticalMargin,
    color: Colors.blue,
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
});
