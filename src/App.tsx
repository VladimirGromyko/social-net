import React, {ComponentType} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/headerContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {AppStoreType} from "./redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";

type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component <AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    initialized: state.app.initialized
})
export default compose<ComponentType>(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
