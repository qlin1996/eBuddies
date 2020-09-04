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
});
