import {ActionsTypes, InitializedSuccessActionType} from "./store";
import {ThunkAction} from "redux-thunk";
import {AppStoreType} from "./redux-store";
import {FormAction} from "redux-form/lib/actions";
import {getAuthUsersData} from "./auth-reducer";

type AppDataType = {
    initialized: boolean
}
type ThunkType = ThunkAction<void, AppStoreType, unknown, ActionsTypes | FormAction>

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState: AppDataType = {
    initialized: false
}

const appReducer = (state: AppDataType = initialState, action: ActionsTypes): AppDataType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = ():
    InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise= dispatch(getAuthUsersData())
    Promise.all([promise]).then(() =>{
        dispatch(initializedSuccess())
    })
}

export default appReducer
