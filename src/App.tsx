import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import s from "./Components/Profile/Profile.module.css";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
//import {Route} from "react-router-dom"


const App = () => {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <BrowserRouter >
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    )
}
export default App;