import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  card: {
    marginLeft: 20,
    marginRight: 21,
    marginTop: 10,
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },
  headerBackground: {
    backgroundColor: "rgba(202, 154, 154, 0.65)",
    height: "20%",
    width: "100%",
    position: "absolute",
    top: "0.3%",
  },

  cardAddress: {
    color: "gray",
    marginBottom: 5,
    marginTop: -7,
    fontSize: 15,
    marginLeft: 16,
  },
  cardImg: {
    width: "92%",
    height: 255,
    marginLeft: 16,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  cardDescription: {
    color: "gray",
    fontSize: 16.5,
    marginTop: 12,
    marginBottom: 25,
  },
  cardDate: {
    color: "gray",
    marginBottom: 15,
    marginTop: 3,
    marginLeft: 17,
  },

  cardTime: {
    color: "gray",
    marginBottom: 0,
    marginTop: "-9%",
    marginLeft: "66.5%",
  },
});
