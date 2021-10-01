import React from 'react';
import Header from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUsersData} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/redux-store";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean,
}

export type HeaderContainerPropsType = {
    login: string | null
    isAuth: boolean,
    setAuthUsersData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUsersData(id, email, login, true)
                }
            })
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
export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer);