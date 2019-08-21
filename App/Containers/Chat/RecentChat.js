import React from "react";
import { View } from "react-native";
import { CardSection, ListItem, Header } from "../../Components";
import styles from "./styles";

class RecentChat extends React.Component {

    render() {
        const { container, avatar } = styles;
        return (
            <View style={container}>
                <CardSection>
                    <ListItem
                        imageSquare={require("../../Images/icons/avatar-icon.png")}
                        avatarStyle={avatar}
                        title="Jane Jones"
                        subTitle="Hello"
                        onPress={() => this.props.navigation.navigate("FriendsGroup")}
                        time="06:10 PM"
                    />
                </CardSection>
            </View>
        );
    }
}

export default RecentChat;