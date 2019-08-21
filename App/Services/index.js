import firebase from 'react-native-firebase';

const Api = () => {
    const userSignup = (email, password, name, mobile) => {
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(response => {
                firebase.firestore().collection('users').doc(response.user.uid)
                    .set({ email: email, name: name, mobile: mobile })
                    .catch((error) => loginUserFail(dispatch));
            })
    }
    return {
        userSignup,
    }
}

export default {
    Api
};









