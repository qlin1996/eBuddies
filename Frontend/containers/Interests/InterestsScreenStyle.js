import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";
export default StyleSheet.create({
  container: {
    backgroundColor: "rgb(233, 233, 233)",
    flex: 1,
  },
  logo: {
    alignSelf: "center",
  },
  background: {
    backgroundColor: "rgb(235, 233, 233)",
    position: "relative",
    top: 80,
  },
  button: {
    color: Colors.blue,
    borderWidth: 0.5,
    borderColor: Colors.blue,
    width: 300,
    padding: 10,
    margin: 2,
    backgroundColor: "rgba(188, 224, 253, 1)",
    alignSelf: "center",
  },
  actions: {
    marginTop: "20%",
  },
  surface: {
    padding: 8,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },

  card: {
    marginTop: "5%",
    paddingTop: "11%",
    marginLeft: "5%",
    marginRight: "5%",
  },

  buttonPress: {
    color: Colors.blue,
    borderWidth: 0.5,
    borderColor: Colors.blue,
    width: 300,
    padding: 10,
    margin: 2,
    backgroundColor: "white",
    alignSelf: "center",
  },

  selectInterests: {
    color: Colors.blue,
    borderWidth: 0.5,
    borderColor: Colors.blue,
    width: 300,
    padding: 10,
    margin: 2,
    backgroundColor: "white",
    alignSelf: "center",
  },

  arrow: {
    width: 30,
    height: 40,
    position: "relative",
    top: -50,
    left: 15,
  },
});
