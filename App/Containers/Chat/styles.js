const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import { Color } from "../../Common/Color";

export default {
    container: {
        padding: 10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: Color.Primary,
    },
    avatar: {
        borderRadius: 100
    },
}