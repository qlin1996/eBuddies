import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  headerMain: {
    ...Helpers.fullWidth,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Metrics.medium,
  },
  headerText: {
    ...Fonts.normal,
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.9,
  },
  burgerIcon: {
    position: "absolute",
    left: 0,
  },
  logo: {
    alignSelf: "center",
  },
  login: {
    width: 550,
    position: "relative",
    top: 210,
    height: 60,
    alignSelf: "center",
    backgroundColor: "rgba(188, 224, 253, 1)",
    borderWidth: 0.5,
    paddingTop: 10,
    ...Fonts.normal,
    paddingBottom: 10,
    margin: 10,
    borderColor: "rgba(38,153,251,1)",
  },
});
