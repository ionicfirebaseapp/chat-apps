import React from "react";
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { InputGroup, CardSection, Button } from "../../Components";
import { Color } from "../../Common/Color";
import { Actions } from "react-native-router-flux";
import styles from "./styles";

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            name: '',
            email: '',
            password: '',
            isLoading: true,
            numberValid: true,
            numberValidate: false,
            emailValidate: false,
            nameValidate: false,
            emailValid: true,
            nameValid: true,
            passwordValid: true,
            passwordValidate: false
        }
    }

    validate(text, type) {
        email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (type == 'email') {
            if (email.test(text)) {
                this.setState({
                    emailValid: true,
                    email: text,
                    emailValidate: true
                })
            }
            else {
                this.setState({
                    email: text,
                    emailValid: false,
                    emailValidate: false
                })
            }
        }
        else {
            if (text.length > 4) {
                this.setState({
                    passwordValid: true,
                    password: text,
                    passwordValidate: true
                })
            }
            else {
                this.setState({
                    password: text,
                    passwordValid: false,
                    passwordValidate: false
                })
            }
        }

    }


    render() {
        const { container, subContainer, logoImgWrapper, logo, subText, socialLogo, btnContainer, socialIconContainer } = styles;
        return (
            <ScrollView style={container}>
                <ImageBackground source={require('../../Images/bg.png')} style={subContainer}>
                    <ScrollView style={subContainer}>
                        <View style={logoImgWrapper}>
                            <Image source={require("../../Images/icons/wooChat.png")} style={logo} resizeMode={'contain'} />
                        </View>
                        <View style={styles.inputContainer}>
                            <InputGroup icon="mail" iconColor={Color.White} placeholder="Email" keyboardType="email-address" errorStyle={!this.state.emailValid ? styles.error : null} onChangeText={(email) => this.validate(email, 'email')}
                                value={this.state.email} />
                            <Text style={styles.errorText} >{!this.state.emailValid ? 'Invalid email address' : ''}</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <InputGroup icon="lock" iconColor={Color.White} placeholder="Password" keyboardType="name-phone-pad" secureTextEntry={true} errorStyle={!this.state.passwordValid ? styles.error : null} onChangeText={(password) => this.validate(password, 'password')}
                                value={this.state.password} />
                            <Text style={styles.errorText} >{!this.state.passwordValid ? 'Must be greater then 4 characters' : ''}</Text>
                        </View>
                        <CardSection>

                            <Button style={btnContainer} onPress={() => {
                                Actions.drawerClose();
                                Actions.mainScreen();
                            }}>
                                Sign In
             </Button>
                        </CardSection>
                        <TouchableOpacity onPress={() => Actions.forgetPassword()}>
                            <Text style={subText}>Forgot Your Password ?</Text>
                        </TouchableOpacity>
                        <Text style={subText}>Connect With</Text>
                        <CardSection style={socialIconContainer}>
                            <Image source={require("../../Images/icons/fb-icon.png")} style={socialLogo} />
                            <Image source={require("../../Images/icons/twt-icon.png")} style={socialLogo} />
                            <Image source={require("../../Images/icons/google-plus.png")} />
                        </CardSection>
                        <TouchableOpacity onPress={() => Actions.signup()}>
                            <Text style={subText}>Haven't an account ?</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default LoginScreen;