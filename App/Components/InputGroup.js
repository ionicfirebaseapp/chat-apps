import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Color } from "../Common/Color";
import styles from "./styles";
import { CrossPlatformIcon } from "../Common/Constant";

const InputGroup = ({ label, value, onChangeText, placeholder, secureTextEntry, icon, iconColor, keyboardType, errorStyle }) => {
  const { IconStyle, InputGroupWrapper, InputGroupLabel, InputGroup } = styles;
  return (
    <View style={[InputGroupWrapper, errorStyle]}>
      <Text style={InputGroupLabel}>{label}</Text>
      <CrossPlatformIcon name={icon} size={30} color={iconColor} style={IconStyle} />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid='transparent'
        placeholderTextColor={Color.White}
        style={InputGroup} />

    </View >
  );
};

export { InputGroup };