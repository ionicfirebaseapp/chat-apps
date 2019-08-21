import { takeEvery, takeLatest } from "redux-saga/effects";
import { types } from "../Redux/types";
import Api from "../Services";
import { userSignupProcess, userLoginProcess } from "./UserSaga";

const api = Api.Api();


export default function* root() {
    yield takeLatest(types.USER_REGISTER, userSignupProcess, api);
    yield takeLatest(types.USER_LOGIN, userLoginProcess, api);
}