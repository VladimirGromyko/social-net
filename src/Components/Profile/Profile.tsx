import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfileType, RootStateType, SubscribeType} from "../../redux/store";
import MyPostsContainer from './MyPosts/MyPostContainer';


type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: SubscribeType
    dispatch: (action: ActionsTypes) => void
}
type StoreOfType = {
    store: StoreType
}
type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

/*const Profile = (props: StoreOfType) => {*/
const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            {/*    <MyPostsContainer store={props.store}/>*/}
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;