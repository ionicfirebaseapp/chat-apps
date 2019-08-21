const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import { Color } from "../../Common/Color";

export default {
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  subContainer: {
    padding: 10
  },
  logoImgWrapper: {
    width: 160,
    height: 70,
    marginTop: 40,
    marginLeft: 86,
    marginBottom: 60
  },
  logo: {
    flex: 1
  },
  subText: {
    color: Color.White,
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600"
  },
  socialLogo: {
    marginRight: 25
  },
  //Profile

  ProfileContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 100,
    alignItems: "center"
  },
  ProfileImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 24
  },
  ProfileText: {
    color: Color.White,
    fontSize: 14,
    lineHeight: 20
  },
  iconWrapper: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 24
  },
  icon: {
    paddingRight: 25
  },
  socialIconContainer: { marginLeft: 40, marginTop: 20 },
  btnContainer: { backgroundColor: Color.Primary },
  error: { borderColor: Color.Red, borderWidth: 1 },
  errorText: { color: Color.Red, paddingTop: 3 },
  inputContainer: {
    padding: 5,
    backgroundColor: "transparent",
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative'
  }
}