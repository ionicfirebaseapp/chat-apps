import React from "react";
import { Image, View, Text, ImageBackground, Dimensions } from "react-native";
import styles from "./styles";
import { CrossPlatformIcon } from "../../Common/Constant";
import { Color } from "../../Common/Color";

class Profile extends React.Component {

    render() {
        const { ProfileContainer, ProfileImg, ProfileText, icon, iconWrapper, container } = styles;
        return (

            <ImageBackground source={require('../../Images/bg.png')} style={container}>
                <View style={ProfileContainer}>

                    <Image source={require("../../Images/9.png")} style={ProfileImg} />
                    <Text style={ProfileText}>Ghotam City, WOR</Text>
                    <Text style={ProfileText}>CEO Marina Bay</Text>
                    <View style={iconWrapper}>
                        <CrossPlatformIcon name="trash" color={Color.White} size={30} style={icon} />
                        <CrossPlatformIcon name="call" color={Color.White} size={30} style={icon} onPress={() => this.props.navigation.navigate("Setting")} />
                        <CrossPlatformIcon name="chatboxes" color={Color.White} size={30} onPress={() => this.props.navigation.navigate("RecentChat")} />
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

export default Profile;