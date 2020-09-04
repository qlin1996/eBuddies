import { Helpers, Metrics, Fonts, Colors } from "../../themes";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: "91%",
  },
  eventName: {
    fontSize: 15,
    width: 100,
    left: -130,
    top: 2,
  },
  backButton: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "20%",
    height: "6.1%",
    alignSelf: "center",
    borderRadius: 15,
    padding: 2,
    margin: 1,
    top: -20,
    color: "white",
    backgroundColor: "white",
    borderColor: "rgba(240, 237, 228, 0.6)",
    borderWidth: 2,
  },
  hereButton: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "20%",
    height: "6.1%",
    alignSelf: "center",
    borderRadius: 15,
    padding: 2,
    margin: 1,
    top: -35,
    color: "white",
    backgroundColor: "white",
    borderColor: "rgba(240, 237, 228, 0.6)",
    borderWidth: 2,
  },
});
