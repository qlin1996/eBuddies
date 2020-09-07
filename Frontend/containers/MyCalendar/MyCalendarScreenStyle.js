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
  surface: {
    marginTop: -60,
    alignSelf: "center",
    width: "30%",
    height: 40,
    marginBottom: 35,
  },
  appHeader: {
    backgroundColor: "rgba(66, 135, 245, 1)",
    height: 60,
    marginTop: 5,
    marginBottom: 5,
  },
});
