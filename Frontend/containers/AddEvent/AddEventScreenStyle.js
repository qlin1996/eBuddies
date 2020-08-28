import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  eventForm: {
    ...Fonts.normal,
    color: Colors.primary,
    textAlign: "left",
    marginTop: 3,
    marginBottom: 0,
    marginHorizontal: 10,
    fontSize: 20,
  },
  addEventButton: {
    ...Fonts.normal,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 50,
  },
  eventImg: {
    width: 420,
    height: 270,
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: Colors.lightBlue,
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.grey,
  },
  eventDescription: {
    ...Fonts.normal,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 10,
  },
  text: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
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
