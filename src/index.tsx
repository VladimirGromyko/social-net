import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {postsType} from "./Components/Profile/MyPosts/MyPosts";

/*  </React.StrictMode>*/

let posts: Array<postsType> = [
    {id: "1", message: "Hi, how are you?", likesCount: 2 },
    {id: "2", message: "Hi, what are you doing?", likesCount: 5 },
    {id: "3", message: "It's my first post.", likesCount: 4 },
]

ReactDOM.render(
    <App posts={posts}/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
