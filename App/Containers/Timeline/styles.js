const React = require("react-native");

const { StyleSheet, Dimensions } = React;
import { Color } from "../../Common/Color";

export default {

    container: { position: "relative", flex: 1 },
    midContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', position: "absolute"
    },
    subContainer: {
        width: 10,
        height: 0,
        borderBottomColor: Color.White,
        borderBottomWidth: 10,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    extraActionContainer: {
        flexDirection: "column",
        backgroundColor: Color.Primary,
        width: "15%", alignItems: "center",
        position: "absolute",
        bottom: 80, left: 10
    }
}