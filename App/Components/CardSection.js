
import React from 'react';
import {View} from 'react-native';
import styles from "./styles";

const CardSection = ({ children , style}) => {
 const { cardSectionContainer } = styles;

 return (
    <View style={[cardSectionContainer, style]}>
        {children}</View>
 );
};


export { CardSection };