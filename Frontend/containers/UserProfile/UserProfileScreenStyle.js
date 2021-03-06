import { StyleSheet } from "react-native";

export default StyleSheet.create({
  surface: {
    alignItems: "center",
    justifyContent: "center",
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
  imageContainer: {
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
  },
  image: {
    height: 200,
    borderRadius: 150,
    width: "50%",
    alignSelf: "center",
    margin: 10,
  },
  profileContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  name: {
    color: "rgb(38,153,251)",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  location: {
    color: "rgb(38,153,251)",
    alignSelf: "center",
    textAlign: "center",
  },
  description: {
    color: "rgb(38,153,251)",
    fontSize: 17,
    marginTop: 30,
    alignSelf: "center",
    padding: 10,
    width: "80%",
    lineHeight: 23.5,
    textAlign: "center",
  },
  interestsContainer: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignSelf: "center",
    textAlign: "center",
    marginTop: -20,
    marginBottom: 25,
  },
  hosted: {
    position: "relative",
    top: "40%",
    left: "-20%",
  },
  edit: {
    top: "3%",
    alignSelf: "center",
  },
  logoutbutton: {
    alignSelf: "center",
  },
  separator: {
    position: "relative",
    top: "1.5%",
    left: "45.5%",
  },
  interests: {
    color: "rgb(38,153,251)",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  interestContainer: {
    flexDirection: "row",
  },
  interest: {
    color: "rgb(38,153,251)",
    borderColor: "rgb(38,153,251)",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginRight: 10,
    alignSelf: "center",
    textAlign: "center",
  },
  buttons: {
    color: "rgb(38,153,251)",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    height: 80,
    justifyContent: "space-around",
  },
  button: {
    color: "rgb(38,153,251)",
  },
});
