import React, { Component } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { Color } from "../Common/Color";

const ToggleSwitch = ({ toggleChange, value }) => {

  return (
    <View>
      <Switch
        onValueChange={toggleChange}
        value={value}
        thumbTintColor={Color.White}
      />
    </View>
  );
}

export { ToggleSwitch };



  // constructor(props){
  //   super(props);
  //   this.state = {
  //     switchValue: false
  //   };
  // }
  // onValueChange = value => {
  //   this.setState({ switchValue: value });
  //    console.log("Switch is: " + this.state.switchValue);
  // };