import React, {ChangeEvent} from 'react';
import {ProfileType} from "../../redux/store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus, savePhoto} from "../../redux/profile-reducer";
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
    status: string,
    authorizedUserId: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {

    getUserProfile: (userId: string | null) => void
    getStatus: (userId: string | null) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    refreshProfile() {
        let userId: string | null = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

let mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    //withAuthRedirect
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