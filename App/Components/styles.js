const React = require("react-native");

const { StyleSheet, Dimensions } = React;

import { Color } from "../Common/Color";

export default {
  //button outline style 
  OutlineBtnText: {
    alignSelf: 'center',
    color: Color.White,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  OutlineBtn: {
    flex: 1,
    backgroundColor: Color.Primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.White,
    marginLeft: 5,
    marginRight: 5
  },
  //normal button
  Btn: {
    flex: 1,
    backgroundColor: Color.Primary,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 50
  },
  BtnText: {
    alignSelf: 'center',
    color: Color.White,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15
  },
  //Card 

  cardContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  // CardSection
  cardSectionContainer: {
    padding: 5,
    backgroundColor: "transparent",
    justifyContent: 'flex-start',
    flexDirection: 'row',

    position: 'relative'
  },
  // Header

  HeaderTitle: {
    fontSize: 20,
    color: Color.White
  },
  HeaderWrapper: {
    backgroundColor: Color.Primary,
    height: 70
  },
  left: {
    position: "absolute",
    top: 15,
    left: 16,
    flex: 1
  },
  body: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  right: {
    position: "absolute",
    bottom: 15,
    right: 14,
    flex: 1
  },
  //Input 

  Input: {
    color: Color.Text,
    fontSize: 14,
    borderBottomWidth: 1,
    width: "100%",
    borderBottomColor: Color.White,
    height: 40
  },
  InputLabel: {
    fontSize: 18
  },
  InputWrapper: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.Primary,
    alignItems: 'center',
    paddingLeft: 0
  },

  //Spinner

  spinnerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  //Avatar
  AvatarWrapper: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  AvatarImg: {
    width: 50,
    height: 50,
  },

  // AvatarSquare
  AvatarSquareWrapper: {
    width: 50,
    height: 50,
  },

  //Input Group
  InputGroup: {
    color: Color.White,
    fontSize: 18,
    borderBottomWidth: 0,
    borderColor: "transparent",
    width: "95%",

  },
  InputGroupLabel: {
    fontSize: 18
  },
  InputGroupWrapper: {
    height: 55,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.White,
    paddingLeft: 10,
    borderRadius: 3
  },
  IconStyle: { paddingTop: 10, paddingRight: 10 },

  //ListItem

  LisItem: {
    flex: 12,
    flexDirection: "row",

  },
  ListItemAatar: {
    flex: 3,
    width: 50,
    height: 50,
    borderRadius: 100
  },
  LisItemImg: {
    width: 50,
    height: 50
  },
  ListItemAatarSquare: {
    flex: 2,
    width: 50,
    height: 50,
  },
  LisItemTextWrapper: {
    flex: 8,
    paddingLeft: 5,
    paddingTop: 5
  },
  ListItemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Color.White
  },
  ListItemSubTitle: {
    fontSize: 14,
    color: Color.White
  },
  LisItemRight: {
    flex: 2,
    paddingTop: 5
  },
  LisItemRightText: {
    fontSize: 12,
    color: Color.White
  },

  //seek bar 

  sliderContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  seekbar: {
    width: "100%"
  },

  //Batch
  batchWrapper: {
    backgroundColor: Color.White,
    width: 40,
    height: 25,
    borderRadius: 12,
    paddingTop: 2
  },
  batchText: {
    color: Color.Primary,
    textAlign: "center"
  },
  // side bar item
  SidebarWrapper: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  sidebarSides: {
    flex: .2
  },
  sidebarBody: {
    flex: .6
  },
  sidebarTitle: {
    color: Color.White,
    paddingTop: 5
  },

  // msgItem
  msgItemContainer: {
    backgroundColor: Color.Grey,
    height: Dimensions.get('window').height
  },
  msgItemSubContainer: {
    height: 150
  },
  msgContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  senderImg: {
    flex: .25
  },
  msgText: {
    flex: .75,
    backgroundColor: Color.White,
    padding: 10
  },
  receiverImg: {
    flex: .25,
    paddingLeft: 25
  },
  headTextContainer: {
    flexDirection: "row"
  },
  msgTitle: {
    fontSize: 14,
    color: Color.Dark,
    fontWeight: "600"
  },
  msgTiming: {
    fontSize: 14,
    color: Color.Dark,
    left: 110
  },
  receicerMsgTiming: {
    fontSize: 14,
    color: Color.Dark,
    left: 90
  },
  msgSubTitle: {
    fontSize: 13,
    color: Color.Dark
  },
  //footer
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: Color.Primary,
    width: "100%",
    height: 70,
    padding: 10,
    flex: 1,
    flexDirection: "row"
  },
  footerIcon: {
    flex: 0.1,
    paddingLeft: 10
  },
  footerInput: {
    flex: 0.9,
    backgroundColor: Color.White,
    height: 50
  }
}