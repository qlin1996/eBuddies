import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  // eventAvatar: {
  //   ...Helpers.fullWidth,
  //   height: 50,
  //   width: 50,
  //   borderRadius: 50,
  //   backgroundColor: Colors.primary,
  //   padding: Metrics.medium,
  // },

  // eventButton: {
  //   ...Fonts.normal,
  //   textAlign: "center",
  //   marginTop: 20,
  //   marginBottom: 50,
  //   marginHorizontal: 50,
  // },
  text: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },

  headerText: {
    color: "white",
    ...Fonts.h4,
    position: "relative",
    top: "20%",
    textAlign: "center",
    // text-transform: uppercase;
    // font-family: 'Lucida Console', Monaco, monospace;
    letterSpacing: 2,
    // fontFamily: "lucida grande",
    textTransform: "uppercase",
  },

  headerBackground: {
    backgroundColor: "rgba(202, 154, 154, 0.65)",
    height: 60,
    width: 361,
    position: "absolute",
    top: "0.3%",
  },

  informationDiv: {
    backgroundColor: "rgba(202, 154, 154, 0.65)",
    height: 100,
    width: 402,
    position: "absolute",
    left: "-4%",
    top: "74%",
  },

  fonts: {
    color: "white",
    fontSize: 16,

    position: "absolute",
    textAlign: "center",
    top: "15%",
    left: "6%",
    width: "80%",
  },
  addressFonts: {
    color: "white",
    ...Fonts.medium,
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: 140,
  },
  dateFonts: {
    color: "white",
    ...Fonts.medium,
    position: "absolute",
    bottom: "14%",
    right: "-10%",
    width: 140,
  },

  eventImg: {
    width: 360,
    height: 250,
    flex: 1,
  },
  imageDiv: {
    marginTop: 20,
    marginBottom: 0,
    borderTopWidth: 1,
    borderBottomWidth: 100,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.grey,
  },
  wholeCardDiv: {
    width: 380,
    position: "relative",
    left: "1%",
    borderColor: "lightblue",
    borderWidth: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 10.7,
    shadowRadius: 8.65,
    margin: 15,
    elevation: 6,
  },
});
