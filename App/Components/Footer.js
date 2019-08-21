import React from "react";
import { View, Text } from "react-native";
import { CrossPlatformIcon } from "../Common/Constant";
import { Color } from "../Common/Color";
import { Input } from "../Components";
import styles from "./styles";

const Footer = ({ title, onPress }) => {
    const { footer, footerIcon, footerInput, iconStyle } = styles;
    return (
        <View style={footer}>

            <CrossPlatformIcon name="more" color={Color.White} size={50} style={[footerIcon, iconStyle]} onPress={onPress} />
            <Input style={footerInput} />
        </View>
    );
}

export { Footer };