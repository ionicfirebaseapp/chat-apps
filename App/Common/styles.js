const React = require("react-native");

const { Dimensions } = React;
import { Color } from "../Common/Color";

export default {
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding: 20,
    },
    imgContainer: {
        alignItems: 'center',
        paddingRight: 40,
        paddingTop: 50,
        paddingBottom: 20
    },
    sidebarText: {
        color: Color.White,
        fontSize: 18,
        fontWeight: '600'
    },
    sidebarContainer: {
        paddingBottom: 20,
        flexDirection: "row",
    },
    sidebarIcon: {
        paddingTop: 2,
        paddingRight: 10
    }
}