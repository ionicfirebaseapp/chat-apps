import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Color } from "../Common/Color";
import styles from "./styles";

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, style }) => {
  const { InputWrapper, InputLabel, Input } = styles;
  return (
    <View style={[InputWrapper, style]}>
      <Text style={InputLabel}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Color.White}
        style={Input}
        underlineColorAndroid='transparent'
      />

    </View>
  );
};

export { Input };