import {ActionsTypes, ProfileType, SetStatusActionType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
type DeletePostActionType = {
    type: "DELETE_POST"
    postId: number
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
type SavePhotoActionType = {
    type: "SAVE_PHOTO_SUCCESS"
    photos: File
}

export type ProfilePageType = {
    posts: Array<postsType>
//    newPostText: string
    profile: ProfileType
    status: string
}
type DispatchType = Dispatch<ActionsTypes>

// export type SetStatusActionType = {
//     type: "SET_STATUS",
//     status: string
// }

const ADD_POST = "ADD-POST"
const DELETE_POST = "DELETE_POST"
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 2},
        {id: 2, message: "Hi, what are you doing?", likesCount: 5},
        {id: 3, message: "It's my first post.", likesCount: 4},
    ],
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
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
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
                ...state, profile: action.profile
            }
        }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter( p => p.id !== action.postId)}

        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: {...state.profile, photos: action.photos}}

        default:
            return state

    }
}
export const addPostAC = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const deletePostAC = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: File): SavePhotoActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: string) => async (dispatch: DispatchType) => {
    const response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: string) => async (dispatch: DispatchType) => {
    const response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: DispatchType) => {
    const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export const savePhoto = (file: File) => async (dispatch: DispatchType) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export default profileReducer