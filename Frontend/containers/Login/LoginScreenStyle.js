import { StyleSheet } from "react-native";
import { Fonts } from "../../themes";
export default StyleSheet.create({
  container: {
    backgroundColor: "rgb(233, 233, 233)",
    flex: 1,
  },
  background: {
    backgroundColor: "rgb(235, 233, 233)",
    position: "relative",
    top: 140,
  },
  button: {
    backgroundColor: "rgba(38,153,251,1)",
    borderWidth: 0.5,
    alignSelf: "center",
    paddingTop: 10,
    ...Fonts.small,
    paddingBottom: 10,
    margin: 10,
    borderColor: "rgba(38,153,251,1)",
    position: "relative",
    top: 0,
    width: 342,
    height: 60,
  },
  account: {
    ...Fonts.small,
    color: "black",
    position: "relative",
    top: 160,
  },
  arrow: {
    width: 30,
    height: 40,
    position: "relative",
    top: -50,
    left: 15,
  },
  containerFb: {
    flex: 1,
    backgroundColor: "#e9ebee",
    alignItems: "center",
    justifyContent: "center",
  },

  loginBtn: {
    backgroundColor: "#4267b2",
    height: 42,
    alignSelf: "center",
    position: "relative",
    top: 50,
    alignItems: "center",

    right: 90,
    width: 165,
    borderRadius: 20,
  },

  containerG: {
    flex: 1,
    backgroundColor: "#e9ebee",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn2: {
    backgroundColor: "white",
    alignItems: "center",

    height: 42,
    alignSelf: "center",
    position: "relative",
    top: 50,
    left: 90,
    width: 165,
    borderRadius: 20,
  },
  login: {
    width: 550,
    position: "relative",
    top: 155,
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
