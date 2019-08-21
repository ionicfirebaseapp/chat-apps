import React, { Component } from "react";
import { Image } from "react-native";
import { DrawerNavigator } from "react-navigation";
import { Color } from "../Common/Color";
import SideBar from "./SideBar/SideBar";
import RecentChat from "../Containers/Chat/RecentChat";
import Notifications from "../Containers/Notification/Notifications";
import FriendsGroup from "../Containers/Group/FriendsGroup";
import FriendList from "../Containers/Friend/FriendList";
import Setting from "../Containers/Settings/Setting";

const Drawer = DrawerNavigator({
  RecentChat: { screen: RecentChat },
  FriendsGroup: { screen: FriendsGroup },
  FriendList: { screen: FriendList },
  Setting: { screen: Setting },
  Notifications: { screen: Notifications },
},
  {
    drawerPosition: "left",
    initialRouteName: "RecentChat",
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerBackgroundColor: Color.Primary,
    contentComponent: props => <SideBar {...props} />

  },
)


export default Drawer;
