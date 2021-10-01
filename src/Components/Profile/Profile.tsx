import React from 'react';
import s from './Profile.module.css'
<<<<<<< HEAD
import MyPosts, {postsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type stateType = {
    profilePage: {
        posts: Array<postsType>,
        newPostText: string
    },
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: stateType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
=======
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
}

/*const Profile = (props: StoreOfType) => {*/
const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            {/*    <MyPostsContainer store={props.store}/>*/}
            <MyPostsContainer/>
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
        </div>
    )
}
export default Profile;