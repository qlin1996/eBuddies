import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  headerMain: {
    ...Helpers.fullWidth,
    height: 70,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
  },
  headerText: {
    ...Fonts.normal,
    color: Colors.primary,
    textAlign: "left",
    marginTop: 3,
    marginBottom: 0,
    marginHorizontal: 20,
    fontSize: 13,
  },
  eventHeader: {
    ...Helpers.fullWidth,
    height: 80,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
    top: 0,
  },
  eventAvatar: {
    ...Helpers.fullWidth,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    padding: Metrics.medium,
  },
  eventImg: {
    width: 375,
    height: 250,
    overflow: "hidden",
    marginTop: 20,
  },
  avatarContainer: {
    ...Helpers.fullWidth,
    height: 50,
    marginBottom: 50,
  },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: "center",
  },
  text: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  moreText: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: "left",
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 12,
  },
  eventFooter: {
    width: 300,
    alignContent: "center",
    justifyContent: "center",
    height: 70,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
  },
});
