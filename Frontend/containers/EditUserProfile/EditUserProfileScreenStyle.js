import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  container1: {
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: "20%",
    marginLeft: 18,
    marginRight: 18,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },

  picOption: {
    flex: 2,
    marginTop: "-6%",
    marginLeft: "-2%",
    marginRight: "-3%",
  },
  surface1: {
    alignSelf: "center",
    width: "40%",
    height: 35,
    marginTop: 10,
    marginLeft: -160,
    marginBottom: 15,
  },
  surface2: {
    alignSelf: "center",
    width: "40%",
    height: 35,
    marginRight: -160,
    marginTop: -50,
    marginBottom: 15,
  },
  image: {
    marginTop: 30,
    marginBottom: 20,
    position: "relative",
    top: "-1%",
    width: "92%",
    height: 255,
    alignSelf: "center",
    borderWidth: 0.2,
    borderColor: "#BEBEBE",
  },

  imageContainer: {
    ...Helpers.crossCenter,
    // backgroundColor: Colors.mediumBlue,
    ...Metrics.verticalPadding,
    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
  },
  image: {
    height: 200,
    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
  },
  profileContainer: {
    ...Metrics.mediumVerticalMargin,
    ...Metrics.mediumHorizontalMargin,
  },
  text: {
    ...Fonts.normal,
    ...Metrics.bottomMargin,
    color: Colors.blue,
  },
  interestsContainer: {
    // backgroundColor: Colors.lightBlue,
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
  },
  interests: {
    color: Colors.blue,
    ...Fonts.normal,
    fontWeight: "bold",
    ...Metrics.bottomMargin,
  },
  interestContainer: {
    flexDirection: "row",
  },
  interest: {
    color: Colors.blue,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    marginRight: 10,
  },
  interestSelected: {
    color: Colors.blue,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    marginRight: 10,
    backgroundColor: Colors.lightBlue,
  },
});
