const React = require("react-native");

const { StyleSheet } = React;
import { Color } from "../../Common/Color";

export default {

  signOutBtn: {
    flex: .6,
    marginLeft: 60
  },

  uploadText: {
    color: Color.White,
    fontSize: 14,
    position: "absolute",
    top: 50,
    left: 20,
  },
  selectImage: {
    marginTop: 10,
    position: "relative",

    height: 110,
    width: 110,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Color.White,
    marginBottom: 20
  },
  imageContainer: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  userName: {
    color: Color.White,
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 10
  },
  editProfile: {
    backgroundColor: "#79620e"
  },
  editIcon: {
    position: "absolute",
    top: 20,
    left: 30
  }
};
