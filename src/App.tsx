import React, {ComponentType, lazy} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/headerContainer";
import LoginPage from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import store, {AppStoreType} from "./redux/redux-store";
import Preloader from "./Components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'));

type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component <AppPropsType> {
    catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
        alert("Some error occurred")
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                    <Switch>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    initialized: state.app.initialized
})
let AppContainer = compose<ComponentType>(withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetAPP = () => {
    return (<HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>)
}
export default SocialNetAPP