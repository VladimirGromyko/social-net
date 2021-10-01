import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";


//let rerenderEntireTree = (state: RootStateType) => {
// let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
// }
/*  </React.StrictMode>*/

//rerenderEntireTree(store.getState())
// rerenderEntireTree()
//
//
// store.subscribe(() => {
//     //let state = store.getState()
//     rerenderEntireTree()
//     //rerenderEntireTree(state)
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();