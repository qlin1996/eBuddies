import { StyleSheet } from "react-native";
import { Fonts } from "../../themes";
export default StyleSheet.create({
  container2: {
    backgroundColor: "white",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 1,
    marginBottom: -80,
    padding: 20,
    margin: 10,
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },
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

  email: {
    position: "relative",
    top: "-11.8%",
    left: "89.5%",
    width: "10%",
    height: "4.3%",
  },

  password: {
    position: "relative",
    top: "-12.6%",
    left: "89.5%",
    width: "10%",
    height: "5.3%",
  },

  validators: {
    color: "#BEBEBE",
    position: "relative",
    top: "19%",
  },
  textInput: {
    height: 40,
    marginTop: 40,
    marginLeft: 0,
    color: "#4d4a4a",
    marginRight: 0,
    borderColor: "#BEBEBE",
    letterSpacing: 1,
    textAlign: "left",
    fontSize: 16,
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 35,
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginTop: "-4%",
    marginBottom: "10%",
  },
  account: {
    ...Fonts.small,
    marginTop: "32%",
    marginBottom: "15%",
    color: "black",
  },

  loginBtn2: {
    backgroundColor: "gray",
    alignItems: "center",
    height: 42,
    alignSelf: "center",
    width: 165,
    borderRadius: 20,
  },
  login: {
    width: "180%",
    // height: "13.1%",
    alignSelf: "center",
    paddingTop: 10,
    ...Fonts.normal,
    paddingBottom: 10,
    margin: 10,
    marginTop: "-2%",
    marginBottom: "-10%",
  },
});
