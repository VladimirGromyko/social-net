import React from 'react';
import {ActionsTypes, ProfileType, RootStateType, SubscribeType} from "../../redux/store";
import Profile from "./Profile";
//import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {usersAPI} from "../../api/api";
import {AppStoreType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


// type StoreType = {
//     _state: RootStateType
//     _callSubscriber: () => void
//     getState: () => RootStateType
//     subscribe: SubscribeType
//     dispatch: (action: ActionsTypes) => void
// }
// type StoreOfType = {
//     store: StoreType
// }
type PathParamType ={
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType,
    isAuth: boolean
}
type MapDispatchPropsType = {

    getUserProfile: (userId: string) => void
    //getUserProfile: (profile: ProfileType) => void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
         let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }

        this.props.getUserProfile(userId)
        // usersAPI.getProfile(userId)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         //this.props.toggleIsFetching(false)
        //         this.props.setUserProfile(response.data)
        //         //this.props.setTotalUsersCount(response.data.totalCount)
        //
        //     })
    }

    render() {
        if (!this.props.isAuth) return <Redirect to= '/login' />
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStoreType):MapStatePropsType  => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
    //A: 4
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)