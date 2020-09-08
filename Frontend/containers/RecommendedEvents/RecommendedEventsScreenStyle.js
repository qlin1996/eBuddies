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
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },
  interestsurface: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: "10%",
    marginRight: "10%",
  },
  surface: {
    padding: 6,
    height: 50,
    margin: 4,
    marginTop: 12,
    width: "36%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  eventButton: {
    ...Fonts.normal,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    position: "absolute",
    top: "30%",
    marginHorizontal: 50,
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
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    color: Colors.primary,
    padding: Metrics.medium,
    backgroundColor: Colors.lightBlue,
    fontSize: 15,
  },

  interests: {
    textAlign: "center",
    color: "black",
    ...Fonts.normal,
    ...Metrics.bottomMargin,
  },
  interestContainer: {
    flexDirection: "row",
  },
  interest: {
    color: Colors.blue,
    textAlign: "center",
    alignSelf: "center",
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    padding: 8,
    marginRight: 10,
    width: 110,
  },

  specificInterest: {
    textDecorationLine: "underline",
    textDecorationColor: Colors.blue,
    fontSize: 16,
  },

  recEvents: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "27%",
    alignSelf: "center",
    borderRadius: 10,
    position: "relative",
    top: "-12%",
    color: "white",
  },

  surfaceEvent: {
    marginTop: "2%",
    marginLeft: -119,
    width: 130,
    left: "10%",
    height: 45,
  },

  interestPoints: {
    fontSize: 16,
    letterSpacing: 1,
    textAlign: "center",
  },
});
