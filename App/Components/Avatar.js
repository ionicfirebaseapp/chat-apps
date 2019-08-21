import React from 'react';
import { View , Image} from 'react-native';
import styles from "./styles";

const Avatar = ({  img , style}) => {
 const { AvatarWrapper,AvatarImg } = styles;
    return(
        <View style={[AvatarWrapper, style]}>
        <Image source={img} style={[AvatarImg, style]}/>
        </View>
    ); 
};


export { Avatar };