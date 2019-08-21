import React from 'react';
import { View, Image } from 'react-native';
import styles from "./styles";

const AvatarSquare = ({ img , style}) => {
 const { AvatarSquareWrapper,AvatarImg } = styles;
    return(
        <View style={[AvatarSquareWrapper, style]}>
        <Image source={img} style={[AvatarImg, style]}/>
        </View>
    ); 
};


export { AvatarSquare };