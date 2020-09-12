import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerMain: {
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  headerText: {
    color: "#007bff",
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
    fontSize: 17,
    paddingBottom: 10,
    margin: 10,
    borderColor: "rgba(38,153,251,1)",
  },
});
