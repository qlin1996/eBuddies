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
  myEvents: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "28%",
    alignSelf: "center",
    height: "7.5%",
    borderRadius: 10,
    // padding: 2,
    // margin: 1,
    position: "relative",
    top: "-12.9%",
    color: "white",
  },
});
