import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

const ButtonOutline = ({ onPress, children , style}) => {
 const { OutlineBtn, OutlineBtnText } = styles;

 return (
   <TouchableOpacity onPress={onPress} style={[OutlineBtn, style]}>
     <Text style={OutlineBtnText}>
       {children}
     </Text>
   </TouchableOpacity>
 );
};


export { ButtonOutline };