import React from 'react';
import s from './Profile.module.css'
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
        </div>
    )
}
export default Profile;