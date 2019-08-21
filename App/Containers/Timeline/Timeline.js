import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Footer, Input, MsgItem, Button } from "../../Components";
import { CrossPlatformIcon } from "../../Common/Constant";
import { Color } from "../../Common/Color";
import renderIf from "../../Components/renderIf";
import styles from './styles';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    chooseMultimedia() {
        if (this.state.active === false) {
            this.setState({
                active: true
            })
        }
        else {
            this.setState({
                active: false
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <ScrollView>
                    <MsgItem
                        avatarSenderImg={require("../../Images/icons/avatar-icon.png")}
                        senderTitle="John Deo"
                        senderTiming="06:00pm"
                        senderSubTitle="how r u?"
                        avatarReceiverImg={require("../../Images/icons/avatar-icon.png")}
                        receiverTitle="Sanny Deo"
                        receiverTiming="06:45am"
                        receiverSubTitle="i m good"
                        style={{ position: "relative" }}
                    />
                    <View style={styles.midContainer}>
                        <View style={styles.subContainer}></View>
                    </View>
                </ScrollView>

                {renderIf(this.state.active)(
                    <View style={styles.extraActionContainer}>
                        <Button><CrossPlatformIcon name="trash" color={Color.White} size={30} /></Button>
                        <Button><CrossPlatformIcon name="microphone" color={Color.White} size={30} /></Button>
                        <Button><CrossPlatformIcon name="attach" color={Color.White} size={30} /></Button>
                        <Button><CrossPlatformIcon name="call" color={Color.White} size={30} /></Button>
                        <Button><CrossPlatformIcon name="person-add" color={Color.White} size={30} /></Button>
                    </View>
                )}

                <Footer onPress={() => this.chooseMultimedia()} iconStyle={{ position: "relative" }} />

            </View>
        );
    }
}

export default Timeline;