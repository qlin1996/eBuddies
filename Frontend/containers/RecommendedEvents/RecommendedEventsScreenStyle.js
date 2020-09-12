import { StyleSheet } from "react-native";

export default StyleSheet.create({
  colMain: {
    width: 375,
    height: 667,
    backgroundColor: "rgb(235, 233, 233)",
    overflow: "hidden",
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },
  interestsurface: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: "10%",
    marginRight: "10%",
  },
  surface: {
    height: 50,
    margin: 4,
    marginTop: 12,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  eventButton: {
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    position: "absolute",
    top: "30%",
    marginHorizontal: 50,
  },
  eventFooter: {
    width: 300,
    alignContent: "center",
    justifyContent: "center",
    height: 70,
    backgroundColor: "#F1F9FF",
    padding: 30,
  },
  errorMsg: {
    fontSize: 17,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    color: "#007bff",
    padding: 30,
    backgroundColor: "#F1F9FF",
    fontSize: 15,
  },

  interests: {
    textAlign: "center",
    color: "black",
    fontSize: 17,
    marginBottom: 30,
  },
  interestContainer: {
    flexDirection: "row",
  },
  interest: {
    color: "rgba(38, 153, 251, 1)",
    textAlign: "center",
    alignSelf: "center",
    borderColor: "rgba(38, 153, 251, 1)",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    padding: 8,
    marginRight: 10,
    width: 110,
  },

  specificInterest: {
    textDecorationLine: "underline",
    textDecorationColor: "rgba(38, 153, 251, 1)",
    fontSize: 16,
  },

  recEvents: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "27%",
    alignSelf: "center",
    borderRadius: 10,
    position: "relative",
    top: "-12%",
    color: "white",
  },

  surfaceEvent: {
    marginTop: "2%",
    marginLeft: -119,
    width: 130,
    left: "10%",
    height: 45,
  },

  interestPoints: {
    fontSize: 16,
    letterSpacing: 1,
    textAlign: "center",
  },
});
