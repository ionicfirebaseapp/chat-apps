import React from "react";
import {ImageBackground,Text, Dimensions} from "react-native";

class Dummy extends React.Component{
    render(){
        return(
            <ImageBackground source={require("../Images/bg.png")} style={{width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
            }}>
            <Text>Inside</Text>
          </ImageBackground>
        );
    }
}

export {Dummy};