import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";
export default StyleSheet.create({
  // background: {
  //   backgroundColor: "white",
  // },
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

  loginBox: {
    fontSize: 23,
    marginTop: 20,
    color: "white",
    textAlign: "center",
  },
  firstname: {
    position: "relative",
    top: "-8.8%",
    left: "86.8%",
    width: "6%",
    height: "2.6%",
  },
  lastname: {
    position: "relative",
    top: "-10%",
    left: "84.2%",
    width: "10.5%",
    height: "4.2%",
  },

  email: {
    position: "relative",
    top: "-9.5%",
    left: "85.8%",
    width: "8.7%",
    height: "4%",
  },

  password: {
    position: "relative",
    top: "-10%",
    left: "86.3%",
    width: "8%",
    height: "4.7%",
  },
  textInputName: {
    height: 26.5,
    marginTop: 40,
    marginLeft: 0,
    color: "#BEBEBE",
    marginLeft: 30,
    marginRight: 30,
    borderColor: "#BEBEBE",
    letterSpacing: 1,
    textAlign: "left",
    fontSize: 16,
    borderBottomWidth: 1,
    width: "85%",
    marginBottom: 30,
  },
  textInput: {
    height: 26.5,
    marginTop: 10,
    marginLeft: 0,
    color: "#BEBEBE",
    marginLeft: 30,
    marginRight: 30,
    borderColor: "#BEBEBE",
    letterSpacing: 1,
    textAlign: "left",
    fontSize: 16,
    borderBottomWidth: 1,
    width: "85%",
    marginBottom: 30,
  },
  validators: {
    marginLeft: 30,
    color: "#BEBEBE",
    position: "relative",
    top: "-8.3%",
  },
  validatorsName: {
    marginLeft: 30,
    color: "#BEBEBE",
    position: "relative",
    top: "-7%",
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },
  validatorsPassword: {
    marginLeft: 30,
    color: "#BEBEBE",
    position: "relative",
    top: "-9%",
  },
  button: {
    alignSelf: "center",
    ...Fonts.small,
    marginTop: "-6%",
    marginBottom: "10%",
  },

  logo: {
    alignSelf: "center",
  },
});
