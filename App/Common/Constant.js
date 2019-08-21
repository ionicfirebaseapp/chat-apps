import React from "react";
import {Platform} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export const CrossPlatformIcon = ({ name, size, color, outline,style, onPress }) => {
    let iconName = Platform.OS === 'android' ? `md-${name}` : `ios-${name}`;
    if (Platform.OS === 'ios' && outline) {
      iconName = `${iconName}-outline`;
    }
    return <Icon name={iconName} size={size} color={color} style={style} onPress={onPress}/>;
   };