import React from "react";
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { InputGroup, CardSection, Button } from "../../Components";
import { Color } from "../../Common/Color";
import { Actions } from "react-native-router-flux";
import styles from "./styles";

class ForgetPassword extends React.Component {

    render() {
        const { container, subContainer, logoImgWrapper, logo, btnContainer } = styles;
        return (
            <ImageBackground source={require('../../Images/bg.png')} style={container}>
                <ScrollView style={subContainer}>
                    <View style={logoImgWrapper}>
                        <Image source={require("../../Images/icons/wooChat.png")} style={logo} resizeMode={'contain'} />
                    </View>
                    <CardSection>
                        <InputGroup icon="mail" iconColor={Color.White} placeholder="Email" />
                    </CardSection>

                    <CardSection>

                        <Button style={btnContainer} onPress={() => {
                            Actions.drawerClose();
                            Actions.mainScreen();
                        }}>
                            Submit
             </Button>
                    </CardSection>

                </ScrollView>
            </ImageBackground>
        );
    }
}

export default ForgetPassword;