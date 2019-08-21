const React = require("react-native");

const { Dimensions } = React;
import { Color } from "../../Common/Color";

export default {
    container: {
        paddingLeft: 10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
}