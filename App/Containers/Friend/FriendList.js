import React from "react";
import { Image, ImageBackground, TouchableOpacity } from "react-native";
import { CardSection, Avatar } from "../../Components";
import styles from "./styles";


class FriendList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    //add friend 
    addFriends() {
        this.setState({
            quantity: this.state.quantity + 1
        })
        this.renderAvatarImg();
    }

    renderAvatarImg() {
        for (let i = 1; i <= this.state.quantity; i++) {
            <Avatar img={require("../../Images/icons/avatar-icon.png")} style={styles.friendImg} />
        }
    }


    render() {
        const { container, img, friendImg } = styles;
        return (
            <ImageBackground source={require('../../Images/bg.png')} style={container}>
                <CardSection>
                    <TouchableOpacity onPress={() => this.addFriends()}><Image source={require("../../Images/icons/add-friend.png")} style={img} /></TouchableOpacity>
                    {this.renderAvatarImg()}
                    <Avatar img={require("../../Images/icons/avatar-icon.png")} style={friendImg} />
                    <Avatar img={require("../../Images/icons/avatar-icon.png")} style={friendImg} />
                </CardSection>
            </ImageBackground>
        );
    }
}

export default FriendList;