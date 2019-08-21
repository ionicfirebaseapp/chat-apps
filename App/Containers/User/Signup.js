import React from "react";
import { View, Text, Image, ScrollView, ImageBackground, Dimensions } from "react-native";
import { InputGroup, CardSection, Card, Button } from "../../Components";
import { Color } from "../../Common/Color";
import { Actions } from "react-native-router-flux";
import styles from "./styles";

class Signup extends React.Component {
    static navigationOptions = {
        header: null
    };

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
        phn = /^(0|[1-9][0-9]{9})$/i;
        email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (type == 'phn') {
            if (phn.test(text)) {
                this.setState({
                    numberValid: true,
                    mobile: text,
                    nameValidate: true
                })
            }
            else {
                this.setState({
                    numberValid: false,
                    mobile: text,
                    nameValidate: false
                })
            }
        }
        else if (type == 'email') {
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
        else if (type == 'password') {
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
        else {
            if (text.length > 4) {
                this.setState({
                    nameValid: true,
                    name: text,
                    nameValidate: true
                })
            }
            else {
                this.setState({
                    name: text,
                    nameValid: false,
                    nameValidate: false
                })
            }
        }
    }


    // onSubmit(name, email, password, mobile) {
    //     api.userSignup(name, email, password, mobile).then(response => {
    //         console.log('response of user sign up', response);
    //         Actions.login();
    //     })
    // }


    render() {
        const { container, subContainer, logoImgWrapper, logo, subText, btnContainer, socialLogo, socialIconContainer } = styles;
        return (
            <ScrollView style={container}>
                <ImageBackground source={require('../../Images/bg.png')} style={subContainer}>

                    <View style={logoImgWrapper}>
                        <Image source={require("../../Images/icons/wooChat.png")} style={logo} resizeMode={'contain'} />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputGroup icon="person" iconColor={Color.White} placeholder="Username" keyboardType="name-phone-pad" errorStyle={!this.state.nameValid ? styles.error : null} onChangeText={(name) => this.validate(name, 'name')}
                            value={this.state.name} />
                        <Text style={styles.errorText} >{!this.state.nameValid ? 'Must be greater then 4 characters' : ''}</Text>
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
                    <View style={styles.inputContainer}>
                        <InputGroup icon="call" iconColor={Color.White} placeholder="Mobile Number" keyboardType="numeric" errorStyle={!this.state.numberValid ? styles.error : null} onChangeText={(mobile) => this.validate(mobile, 'phn')}
                            value={this.state.mobile} />
                        <Text style={styles.errorText}>{!this.state.numberValid ? 'Invalid phone number, must be 10 digits' : ''}</Text>
                    </View>
                    <CardSection>
                        <Button style={btnContainer} onPress={() => {
                            Actions.drawerClose();
                            Actions.mainScreen();
                        }}>
                            Submit
                           </Button>
                    </CardSection>
                    <Text style={subText}>Connect With</Text>
                    <CardSection style={socialIconContainer}>
                        <Image source={require("../../Images/icons/fb-icon.png")} style={socialLogo} />
                        <Image source={require("../../Images/icons/twt-icon.png")} style={socialLogo} />
                        <Image source={require("../../Images/icons/google-plus.png")} />
                    </CardSection>
                    <Text style={subText} onPress={() => Actions.login()}>Have an already account ?</Text>

                </ImageBackground>
            </ScrollView>
        );
    }
}

export default Signup;