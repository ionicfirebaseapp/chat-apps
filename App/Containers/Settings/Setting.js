import React from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import { Input, CardSection, Radio, ToggleSwitch, SeekBar, Header } from "../../Components";
import styles from "./styles";

var radio_props = [
    { value: 0 },
    { value: 1 }
];

class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            switchValue: false,
            soundValue: false,
            fbSwitch: false,
            twtSwitch: false
        }
    }
    handleOnPress(value) {
        this.setState({ value: value })
    }


    onValueChange = () => {
        this.setState({ switchValue: !this.state.switchValue });
        console.log("Switch is: " + this.state.switchValue);
    };

    onSoundValueChange = () => {
        this.setState({ soundValue: !this.state.soundValue });
        console.log("soundValue is: " + this.state.soundValue);
    }

    fbSwitchValueChange = () => {
        this.setState({ fbSwitch: !this.state.fbSwitch });
        console.log("fbSwitch is: " + this.state.fbSwitch);
    }

    twtSwitchValueChange = () => {
        this.setState({ twtSwitch: !this.state.twtSwitch });
        console.log("twtSwitch is: " + this.state.twtSwitch);
    }

    render() {

        const { settingWrapper, subText, subTitle, genderCategory, componentWrapper, subTitleWrapper, subSection } = styles;
        return (
            <View style={settingWrapper}>
                <ImageBackground source={require('../../Images/bg.png')} style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height
                }}>
                    <Text style={subText}>Account</Text>
                    <CardSection>
                        <Input placeholder="Dadang Deo" />
                    </CardSection>
                    <CardSection>
                        <Input placeholder="san@gmail.com" />
                    </CardSection>
                    <CardSection style={subSection}>
                        <View style={subTitleWrapper}>
                            <Text style={subTitle}>Gender</Text>
                        </View>
                        <View style={componentWrapper}>
                            <Text style={genderCategory}>Male</Text>
                            <Radio
                                currentValue={this.state.value}
                                value={0}
                                onPress={this.handleOnPress.bind(this)}
                            />
                            <Text style={genderCategory}>Female</Text>
                            <Radio
                                currentValue={this.state.value}
                                value={1}
                                onPress={this.handleOnPress.bind(this)}
                            />
                        </View>
                    </CardSection>
                    <Text style={subText}>Notifications</Text>
                    <CardSection>
                        <View style={subTitleWrapper}>
                            <Text style={subTitle}>Email Notifications</Text>
                        </View>
                        <View style={componentWrapper}>
                            <ToggleSwitch
                                value={this.state.switchValue}
                                toggleChange={() => this.onValueChange()}

                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={subTitleWrapper}>
                            <Text style={subTitle}>Sound Alerts</Text>
                        </View>
                        <View style={componentWrapper}>
                            <ToggleSwitch
                                value={this.state.soundValue}
                                toggleChange={() => this.onSoundValueChange()}

                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <Text style={subTitle}>Volume</Text>
                        <SeekBar />
                    </CardSection>
                    <Text style={subText}>Social Networking</Text>
                    <CardSection>
                        <View style={subTitleWrapper}>
                            <Text style={subTitle}>Connect With Facebook</Text>
                        </View>
                        <View style={componentWrapper}>
                            <ToggleSwitch
                                value={this.state.fbSwitch}
                                toggleChange={() => this.fbSwitchValueChange()}

                            />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={subTitleWrapper}>
                            <Text style={subTitle}>Connect With Twitter</Text>
                        </View>
                        <View style={componentWrapper}>
                            <ToggleSwitch
                                value={this.state.twtSwitch}
                                toggleChange={() => this.twtSwitchValueChange()}

                            />
                        </View>
                    </CardSection>
                </ImageBackground>
            </View>
        );
    }
}

export default Setting;