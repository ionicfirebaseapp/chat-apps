const React = require("react-native");
const { Dimensions } = React;

export default {
    img: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    friendImg: {
        marginRight: 10
    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
}