import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { CrossPlatformIcon } from "../Common/Constant";
import { Batch } from "../Components";
import { Color } from "../Common/Color";

const SidebarItem = ({ title, onPress, batchText, iconName }) => {
  const { SidebarWrapper, sidebarBody, sidebarSides, sidebarTitle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[SidebarWrapper]}>
      <View style={sidebarSides}>
        <CrossPlatformIcon name={iconName} color={Color.White} size={30} />
      </View>
      <View style={sidebarBody}>
        <Text style={sidebarTitle}>{title}</Text>

      </View>
      <View style={sidebarSides}>
        <Batch text={batchText} />
      </View>
    </TouchableOpacity>
  );
};

export { SidebarItem };