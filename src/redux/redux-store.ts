import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type RootReducersType = typeof rootReducer
export type AppStoreType = ReturnType<RootReducersType>

// let store:StoreType = createStore(reducers)
let store = createStore(rootReducer)

// @ts-ignore
window.store = store

export default store