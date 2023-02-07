import { StyleSheet } from "react-native";

export default StyleSheet.create({
  camera: {
    width: "100%",
    height: 500,
    // backgroundColor: "#f0f0f0",
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    // margin: 20,
  },
  button: {
    position: "absolute",
    top: 0,
  },
  text: {
    fontSize: 18,
    color: "white",
    marginLeft: 5,
  },

  image: {
    width: "100%",
    height: 250,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
  },

  takePhoto: {
    width: 60,
    height: 60,
    // backgroundColor: "#f0f0f0",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,

    alignSelf: "center",
  },

  textInput: {
    width: "100%",

    marginVertical: 10,
    padding: 10,
    // borderRadius: 5,
  },
});
