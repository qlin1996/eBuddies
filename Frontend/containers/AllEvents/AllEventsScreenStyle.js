import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  colMain: {
    ...Helpers.fullWidth,
    width: 375,
    height: 667,
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  eventMap: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "27%",
    alignSelf: "center",
    borderRadius: 10,
    position: "relative",
    top: "-13%",
    color: "white",
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },
  surface: {
    marginTop: 15,
    alignSelf: "center",
    height: 40,
    width: 130,
  },

  eventFooter: {
    width: 300,
    alignContent: "center",
    justifyContent: "center",
    height: 70,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
  },
  errorMsg: {
    ...Fonts.normal,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 70,
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    color: Colors.primary,
    padding: Metrics.medium,
    backgroundColor: Colors.lightBlue,
    fontSize: 15,
  },
});
