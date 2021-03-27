import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: MyPostsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    )
}
export default Profile;