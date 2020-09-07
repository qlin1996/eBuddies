import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";
export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 15,
    marginBottom: "6%",
    marginLeft: 18,
    marginRight: 18,
    borderColor: "white",
    borderRadius: 10,
  },
  logo: {
    alignSelf: "center",
  },
  surface: {
    alignSelf: "center",
    width: 20,
  },
  background: {
    backgroundColor: "rgb(235, 233, 233)",
    position: "relative",
    top: 80,
  },
  button: {
    color: Colors.blue,
    borderColor: Colors.blue,
    width: 300,
    padding: 10,
    margin: 2,
    backgroundColor: "rgba(188, 224, 253, 1)",
    alignSelf: "center",
  },
  actions: {
    marginTop: "15%",
    width: 160,
    alignSelf: "center",
    marginBottom: "20%",
  },
  surface: {
    padding: 8,
    height: 55,
    width: "100%",
    color: "blue",
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
    width: 300,
    padding: 10,
    margin: 2,
    backgroundColor: "white",
    alignSelf: "center",
  },

  selectInterests: {
    color: Colors.blue,
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
