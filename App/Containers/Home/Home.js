import React from "react";
import { View, Text, Image, ImageBackground, Dimensions } from "react-native";
import styles from "./styles";

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    render() {
        const { HomeWrapper, logo, container } = styles;
        return (
            <ImageBackground source={require('../../Images/bg.png')} style={HomeWrapper}>
                <Image source={require("../../Images/icons/chat-logo.png")} style={logo} resizeMode="contain" />
                <Image source={require("../../Images/icons/wooChat.png")} resizeMode="contain" />
            </ImageBackground>
        );
    }
}

export default Home;