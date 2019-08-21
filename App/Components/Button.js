import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./styles";

const Button = ({ onPress, children , style}) => {
 const { Btn, BtnText } = styles;

 return (
   <TouchableOpacity onPress={onPress} style={[Btn, style]}>
     <Text style={BtnText}>
       {children}
     </Text>
   </TouchableOpacity>
 );
};


export { Button };