import React from 'react';
import {ProfileType} from "../../redux/store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {AppStoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType,
    status: string
    //isAuth: boolean
}
type MapDispatchPropsType = {

    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    //getUserProfile: (profile: ProfileType) => void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            // userId = "1049"
            userId = "17281"
        }

        this.props.getUserProfile(userId);
        // usersAPI.getProfile(userId)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         //this.props.toggleIsFetching(false)
        //         this.props.setUserProfile(response.data)
        //         //this.props.setTotalUsersCount(response.data.totalCount)
        //
        //     })
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
    //isAuth: state.auth.isAuth
    //A: 4
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// // let AuthRedirectComponent = (props: PropsType) => {
// //     if (!props.isAuth) return <Redirect to= '/login' />
// //     return <ProfileContainer { ... props}/>
// // }
//
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)