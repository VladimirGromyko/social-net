import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {getAuthUsersData, logout} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/redux-store";
import {log} from "util";


type MapStatePropsType = {
    login: string | null
    isAuth: boolean,
}

export type HeaderContainerPropsType = {
    login: string | null
    logout: () => void
    isAuth: boolean,
    //setAuthUsersData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void
    getAuthUsersData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUsersData()
        // authAPI.me()
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        // //     {withCredentials: true})
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data
        //             this.props.setAuthUsersData(id, email, login, true)
        //         }
        //     })
    }

    render() {
        return (
            <Header {...this.props} />)
    }
}

const mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUsersData, logout})(HeaderContainer);