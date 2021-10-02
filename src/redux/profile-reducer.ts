import {ActionsTypes, ProfileType, SetStatusActionType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, StatusType, usersAPI} from "../api/api";

type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
type SetUserProfileActionType = {
    type: "SET-USER-PROFILE",
    profile: ProfileType
}
type postsType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<postsType>
    newPostText: string
    profile: ProfileType
    status: string
}
type DispatchType = Dispatch<ActionsTypes>

// export type SetStatusActionType = {
//     type: "SET_STATUS",
//     status: string
// }

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET_STATUS"


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 2},
        {id: 2, message: "Hi, what are you doing?", likesCount: 5},
        {id: 3, message: "It's my first post.", likesCount: 4},
    ],
    newPostText: 'YoYoYo',
    profile: {
        "aboutMe": "",
        "contacts": {
            "facebook": "",
            "website": null,
            "vk": "",
            "twitter": "",
            "instagram": "",
            "youtube": null,
            "github": "",
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": "",
        "fullName": "",
        "userId": "2",
        "photos": {
            "small": "",
            "large": ""
        }
    },
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: postsType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state

    }
}
export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
const setUserProfile = (profile:ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
const setStatus = (status:string): SetStatusActionType => ({type: SET_STATUS, status})


// video 73 15:32


export const getUserProfile = (userId: string) => (dispatch:DispatchType) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
})
}

export const getUserStatus = (userId: string) => (dispatch:DispatchType) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch:DispatchType) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
}

export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer