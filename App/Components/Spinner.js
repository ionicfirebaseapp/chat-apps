import React from 'react';
import { View ,ActivityIndicator } from 'react-native';
import styles from "./styles";

const Spinner = ({ size, style }) => {
 const {spinnerWrapper} = styles;
     return(
        <View style={[spinnerWrapper, style]}>
         <ActivityIndicator size={ size || 'large'}/>
        </View>
     );
 };


export { Spinner };