import React from "react";
import {View, Text} from "react-native";
import styles from "./styles";

const Batch = ({text}) => {
    
        const {batchWrapper, batchText} = styles;
        return(
          <View style={batchWrapper}>
            <Text style={batchText}>{text}</Text>
          </View>
        );
    }

export {Batch};