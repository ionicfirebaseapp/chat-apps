const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import { Color } from "../../Common/Color";

export default {

    HomeWrapper: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingBottom: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200
    },
}