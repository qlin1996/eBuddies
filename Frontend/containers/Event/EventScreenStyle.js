import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  headerWrapper: {
    ...Helpers.fullWidth,
    height: 75,
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: Colors.lightBlue,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.grey,
  },
  headerText: {
    ...Fonts.normal,
    color: Colors.primary,
    textAlign: "left",
    marginTop: 3,
    marginBottom: 0,
    marginHorizontal: 10,
    fontSize: 14,
  },
  eventHeader: {
    ...Helpers.fullWidth,
    height: 50,
    padding: Metrics.medium,
    top: 20,
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
    width: 420,
    height: 270,
    flex: 1,
  },
  eventDescription: {
    ...Fonts.normal,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 10,
  },
  eventButton: {
    ...Fonts.normal,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 50,
  },
  text: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
