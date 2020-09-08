import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  eventButton: {
    ...Fonts.normal,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 50,
  },
  container1: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 18,
    marginRight: 18,
  },
  surface: {
    marginTop: -60,
    alignSelf: "center",
    width: "35%",
    height: 40,
    marginBottom: 35,
  },
  attendeeIcon: {
    marginTop: -35,
    width: 100,
    marginLeft: -20,
  },
  hostIcon: {
    marginTop: -35,
    width: 100,
    marginLeft: -20,
  },
  surfaceHost: {
    alignSelf: "center",
    width: "55%",
    marginTop: 4,
    height: 55,
    backgroundColor: "white",
    marginBottom: 3,
  },
  surfaceAttend: {
    alignSelf: "center",
    backgroundColor: "white",
    width: "55%",
    height: 55,
  },
  appHeader: {
    backgroundColor: "rgba(66, 135, 245, 1)",
    height: 60,
    marginTop: 5,
    marginBottom: 5,
  },
});
