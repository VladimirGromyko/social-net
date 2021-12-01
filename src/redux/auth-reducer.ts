import {ActionsTypes, GetCaptchaUrlActionType, SetUserDataActionType} from "./store";
import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStoreType, ThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import {Component} from "react";
import {FC} from "react";


export type UserDataType = {
    userId: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null // if null, then captcha is not required
    //isFetching: boolean
}


const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS"

let initialState: UserDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
    //isFetching: false
}

const authReducer = (state: UserDataType = initialState, action: ActionsTypes): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }

        // case TOGGLE_IS_FETCHING: {
        //     return { ...state, isFetching: action.isFetching}
        // }
        default:
            return state
    }
}

//export const setUsersData = (userId: number | null, email: string | null, login: string | null, isFetching: boolean): SetUserDataActionType => (
export const setAuthUsersData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null):
    SetUserDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth, captchaUrl}})

export const getCaptchaUrlSuccess = (captchaUrl: string | null):
    GetCaptchaUrlActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUsersData = (): ThunkType => async (dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUsersData(id, email, login, true, null))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType =>
    async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            // success, get auth data
            dispatch(getAuthUsersData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    };

export const getCaptchaUrl = (): ThunkType =>
    async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    };

export const logout = (): ThunkType =>
    async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUsersData(null, null, null, false, null))
        }
    }

export default authReducer
