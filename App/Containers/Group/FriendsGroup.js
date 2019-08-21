import React from "react";
import { ImageBackground } from "react-native";
import { ListItem, CardSection } from "../../Components";
import styles from "./styles";


class FriendsGroup extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../../Images/bg.png')} style={styles.container}>
                <CardSection>
                    <ListItem
                        imageSquare={require("../../Images/icons/noti.png")}
                        title="Web Design"
                        subTitle="Confirm join to group"
                        onPress={() => this.props.navigation.navigate("Notifications")}
                    />

                </CardSection>
                <CardSection>
                    <ListItem
                        imageSquare={require("../../Images/icons/noti.png")}
                        title="Web Design"
                        subTitle="Confirm join to group"
                        onPress={() => this.props.navigation.navigate("Notifications")}
                    />

                </CardSection>
            </ImageBackground>
        );
    }
}

export default FriendsGroup;