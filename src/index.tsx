import './index.css';
//import reportWebVitals from './reportWebVitals';
//import state, {subscribe} from "./redux/state";
import store from "./redux/state";

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
//import {addPost, RootStateType, updateNewPostText} from "./redux/state";
import React from "react";


let rerenderEntireTree = () => {
    //state:RootStateType
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
/*  </React.StrictMode>*/

rerenderEntireTree()


store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
