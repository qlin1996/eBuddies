import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  card: {
    marginLeft: 20,
    marginRight: 21,
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
    marginTop: -10,
    marginLeft: 16,
  },

  cardDate: {
    color: "gray",
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 19,
  },
  cardImg: {
    width: "92%",
    height: 250,
    marginLeft: 16,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  cardDescription: {
    color: "gray",
    fontSize: 14.5,
    marginTop: -3,
  },

  cardTime: {
    color: "gray",
    marginBottom: 15,
    marginTop: -34,
    marginLeft: "68.5%",
  },
});
