import {ActionsTypes, SetUserDataActionType} from "./store";

export type UserDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    //isFetching: boolean
}


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
                ...action.data,
                isAuth: true
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
//export const setAuthUsersData = (data:UserDataType):
    SetUserDataActionType => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})  //, isFetching
//SetUserDataActionType => ({type: SET_USER_DATA, data})  //, isFetching
//export const toggleIsFetching = (isFetching:boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

export default authReducer