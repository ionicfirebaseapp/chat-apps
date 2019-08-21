import { put } from "redux-saga/effects";
import { types } from "../Redux/types";
import { Alert } from 'react-native';

export function* userSignupProcess(api, action) {
    const { payload } = action
    console.log("userSignupProcess payload -m ", payload)
    try {
        const response = yield api.userReg(payload);
        console.log("userSignupProcess response- ", response);
        if (response) {
            console.log('response -------', JSON.stringify(response));
            yield put({ type: types.USER_REGISTER_SUCCESS, payload: data });
        } else {
            yield put({ type: types.USER_REGISTER_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}

export function* userLoginProcess(api, action) {
    const { payload } = action
    console.log("userLoginProcess payload -m ", payload)
    try {
        const response = yield api.userLogin(payload.mobile);
        if (response) {
            const { data } = response;
            console.log("userLoginProcess response- ", response);

            if (data.Error === "0000") {
                payload.navigate("LoginOtpScreen", { number: payload.mobile });
            }
            else {
                Alert.alert(
                    'Error ',
                    data.Message,
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                console.log('ok')
                            },
                        },
                    ],
                    {
                        cancelable: false,
                    }
                );
            }

            yield put({ type: types.USER_LOGIN_SUCCESS, payload: data });
        } else {

            yield put({ type: types.USER_LOGIN_FAILURE, payload: null });
        }
    }
    catch (e) {
    }
}