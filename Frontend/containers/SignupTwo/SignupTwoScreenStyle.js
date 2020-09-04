import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";
export default StyleSheet.create({
  container: {
    backgroundColor: "rgb(233, 233, 233)",
    flex: 1,
  },
  background: {
    backgroundColor: "rgb(235, 233, 233)",
    position: "relative",
    top: 30,
  },
  picOption: {
    flex: 2,
  },
  textInput: {
    ...Fonts.normal,
    height: 50,
    backgroundColor: "rgb(235, 233, 233)",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(38,153,251,1)",
    marginHorizontal: 40,
    marginBottom: 20,
    color: "rgba(38,153,251,1)",
    paddingHorizontal: 10,
  },
  picOption1: {
    position: "relative",
    top: -17,
    left: -111,
    color: "rgba(38,153,251,1)",
  },
  picOption2: {
    position: "relative",
    top: -52,
    left: 245,
    width: 160,
    color: "rgba(38,153,251,1)",
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
    position: "absolute",
    top: "96%",
    width: 342,
    height: 60,
  },
  imageContainer: {
    position: "relative",
    top: "-7.5%",
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 0.2,
    borderColor: "white",
    backgroundColor: "white",
  },
  camera: {
    position: "relative",
    top: "-45%",
    left: "25%",
    width: 20,
    height: 20,
  },
  selectPic: {
    position: "relative",
    top: "1%",
    left: "12%",
  },
  takePic: {
    position: "relative",
    top: "-7.9%",
    width: 118,
    left: "10%",
  },
  image: {
    position: "relative",
    top: "-1%",
    width: 130,
    height: 130,
    alignSelf: "center",

    width: 120,
    height: 120,
    borderRadius: 50,
    borderWidth: 0.2,
    borderColor: "white",
    backgroundColor: "white",
  },
  login: {
    width: 550,
    position: "relative",
    top: 145,
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
  account: {
    ...Fonts.small,
    color: "black",
    position: "relative",
    top: 140,
  },
  arrow: {
    width: 30,
    height: 40,
    position: "relative",
    top: -50,
    left: 15,
  },
  logo: {
    alignSelf: "center",
  },
});
