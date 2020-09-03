import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
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
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  headerBackground: {
    backgroundColor: "rgba(202, 154, 154, 0.65)",
    height: "17%",
    width: "100%",
    position: "absolute",
    top: "0.3%",
  },

  informationDiv: {
    backgroundColor: "rgba(202, 154, 154, 0.65)",
    height: "25%",
    width: "100%",
    position: "absolute",
    top: "75%",
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
    width: "35%",
  },
  modal: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    top: "15%",
    height: "50%",
    bottom: 0,
    backgroundColor: "white",
  },
  modalText: {
    alignSelf: "center",
    fontSize: 50,
  },
  logo: {
    position: "absolute",
    top: "-130%",
    left: "22%",
  },
  image2: {
    width: "46%",
    alignSelf: "center",
    position: "relative",
    top: "3%",
    height: 175,
    borderRadius: 150,
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: Colors.lightBlue,
  },
  eventImg: {
    width: 360,
    height: 250,
    flex: 1,
    position: "relative",
    // left: "1%",
  },
  imageDiv: {
    marginTop: 10,
    marginBottom: 0,
    position: "relative",
    top: "15%",
    width: "25%",
    height: "70%",
  },
  wholeCardDiv: {
    width: "89.5%",
    height: "58%",
    position: "relative",
    // left: "%",
    top: "5%",
    alignSelf: "center",
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
