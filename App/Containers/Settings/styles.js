const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import { Color } from "../../Common/Color";

export default {
  settingWrapper: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: Color.Primary,
    paddingLeft: 15,
    paddingRight: 15
  },
  subSection: {

    paddingTop: 10
  },
  subText: {
    color: Color.White,
    marginTop: 10,
    fontSize: 13,
    paddingBottom: 8,
    paddingLeft: 4,
    fontWeight: "600"
  },
  subTitle: {
    color: Color.White,
    fontSize: 14,
  },
  subTitleWrapper: {
    flex: 0.5
  },
  genderCategory: {
    color: Color.White,
    fontSize: 14,
    paddingRight: 5,
    paddingLeft: 5
  },
  componentWrapper: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: 'flex-end'
  },
}