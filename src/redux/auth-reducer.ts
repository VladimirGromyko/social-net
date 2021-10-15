import {ActionsTypes, SetUserDataActionType} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";



export type UserDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    //isFetching: boolean
}

type ThunkType = ThunkAction<void, AppStoreType, unknown, ActionsTypes | FormAction>

const SET_USER_DATA = "SET_USER_DATA"

let initialState: UserDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    //isFetching: false
}

const authReducer = (state: UserDataType = initialState, action: ActionsTypes): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }
        }

        // case TOGGLE_IS_FETCHING: {
        //     return { ...state, isFetching: action.isFetching}
        // }
        default:
            return state
    }
}

//export const setUsersData = (userId: number | null, email: string | null, login: string | null, isFetching: boolean): SetUserDataActionType => (
export const setAuthUsersData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean):
    SetUserDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})  //, isFetching
//export const setAuthUsersData = (data:UserDataType):
//SetUserDataActionType => ({type: SET_USER_DATA, data})  //, isFetching
//export const toggleIsFetching = (isFetching:boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const getAuthUsersData = (): ThunkType => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUsersData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
    (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUsersData())
                }
                // else {
                //     let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                //     dispatch(stopSubmit('login', {_error: message}))
                // }
            })
    };

export const logout = (): ThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUsersData(null, null, null, false))
            }
        })
}

export default authReducer

// Video 79 Time: 19.00