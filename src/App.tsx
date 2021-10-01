import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {ActionsTypes, RootStateType, SubscribeType} from "./redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/headerContainer";


type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: SubscribeType
    dispatch: (action: ActionsTypes) => void
}
export type StoreOfType = {
    store: StoreType
}

// const App = (props: StoreOfType) => {
const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                {/*<DialogsContainer store={props.store}/>}/>*/}
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />}/>
                {/*<Route path='/profile' render={() => <ProfileContainer />}/>*/}

                {/*<Profile store={props.store}/>}/>*/}
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/news' render={() => <News />}/>
                <Route path='/music' render={() => <Music />}/>
                <Route path='/settings' render={() => <Settings />}/>
            </div>
        </div>
    )
}
export default App;