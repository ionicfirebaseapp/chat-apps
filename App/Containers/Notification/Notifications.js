import React from "react";
import { ImageBackground } from "react-native";
import { ListItem, CardSection } from "../../Components";
import styles from "./styles";

class Notifications extends React.Component {

    render() {
        // const {navigate} = this.props.navigation;
        return (

            <ImageBackground source={require('../../Images/bg.png')} style={styles.container}>
                <CardSection>
                    <ListItem
                        imageSquare={require("../../Images/icons/noti.png")}
                        title="Web Design"
                        subTitle="Confirm join to group"
                        onPress={() => this.props.navigation.navigate("Profile")}
                    />

                </CardSection>
                <CardSection>
                    <ListItem
                        imageSquare={require("../../Images/icons/noti.png")}
                        title="Web Design"
                        subTitle="Confirm join to group"
                        onPress={() => this.props.navigation.navigate("Profile")}
                    />

                </CardSection>
            </ImageBackground>
        );
    }
}

export default Notifications;