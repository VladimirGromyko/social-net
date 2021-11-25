import React, {ChangeEvent} from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfileType, RootStateType, SubscribeType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostContainer";



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
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: ( file: File) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;