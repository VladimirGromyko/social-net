import React from 'react';
import {ActionsTypes, RootStateType, SubscribeType} from "../../../redux/store";
import {addPostAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


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

let MapStateToProps = (state:RootStateType) => {
    return {
        posts:state.profilePage.posts,
        //newPostText:state.profilePage.newPostText
    }
}
let MapDispatchToProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        // updateNewPostText: (text: string) => {
        //     let action = updateNewPostTextAC(text)
        //     dispatch(action)
        // },
        addPost: (newPostText: string) => dispatch(addPostAC(newPostText))
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;