
import React from 'react';
import { View, Text } from 'react-native';
import styles from "./styles";
import { Color } from "../Common/Color";
import { CrossPlatformIcon } from "../Common/Constant";

const Header = ({ title, onPress, rightIcon, onPressRightIcon, leftIcon }) => {
    const { HeaderTitle, HeaderWrapper, left, body, right } = styles;

    return (
        <View style={[HeaderWrapper]}>
            <View style={left}>
                <CrossPlatformIcon name={leftIcon} color={Color.White} size={40} onPress={onPress} />
            </View>
            <View style={body}>
                <Text style={HeaderTitle}>{title}</Text>
            </View>
            {/* <View style={right}>
    <CrossPlatformIcon name={rightIcon} color={Color.White} size={40} onPress={onPressRightIcon}/>
    </View> */}
        </View>
    );
};


export { Header };