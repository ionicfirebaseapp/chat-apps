
import React from 'react';
import {View} from 'react-native';
import styles from "./styles";

const Card = ({ children , style}) => {
 const { cardContainer } = styles;

 return (
    <View style={[cardContainer, style]}>
        {children}</View>
 );
};


export { Card };
