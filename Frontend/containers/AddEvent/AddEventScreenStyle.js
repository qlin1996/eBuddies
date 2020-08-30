import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  eventForm: {
    flex: 1,
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
  textInput: {
    width: "90%",
    height: 42,
    borderColor: "#009688",
    borderWidth: 1,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  addEventButton: {
    ...Fonts.normal,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 50,
  },
});
