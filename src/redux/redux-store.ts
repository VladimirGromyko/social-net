import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import reducer, { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducersType = typeof rootReducer
export type AppStoreType = ReturnType<RootReducersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
));
// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.__store__ = store

export default store