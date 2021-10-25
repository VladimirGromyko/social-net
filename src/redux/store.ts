import profileReducer, {ProfilePageType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {UsersType} from "./users-reducer";
import {UsersObjectType} from "../Components/Users/UsersContainer";
import {UserDataType} from "./auth-reducer";
import {FormAction} from "redux-form/lib/actions";


type DialogsType = {
    id: string
    name: string
}

type MessagesType = {
    id: string
    message: string
}

export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null,
        "github": string,
        "mainLink": null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": string,
    "photos": {
        "small": string,
        "large": string
    }
}


export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type SidebarType = {}

export type SubscribeType = (observer: () => void) => void

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersType
}
type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
type UpdateNewMessageBodyType = {
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: string
}
export type SendMessageType = {
    type: "SEND-MESSAGE"
    newMessageBody: string
}
type FollowType = {
    type: "FOLLOW",
    userId: number
}
type UnfollowType = {
    type: "UNFOLLOW",
    userId: number
}

type SetUsersType = {
    type: "SET_USERS",
    users: Array<UsersObjectType>
}
type SetCurrentPageType = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
type SetTotalUsersCountType = {
    type: "SET_TOTAL_USERS_COUNT",
    count: number
}
type ToggleIsFetchingType = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}
type ToggleIsFollowingInProgressType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetchingForFollowing: boolean,
    userId: number
}
type SetUserProfileActionType = {
    type: "SET-USER-PROFILE",
    profile: any
}
export type SetStatusActionType = {
    type: "SET_STATUS",
    status: string
}
export type SetUserDataActionType = {
    type: "SET_USER_DATA",
    payload: UserDataType
}
export type InitializedSuccessActionType = {
    type: "INITIALIZED_SUCCESS"
}

export type ActionsTypes = AddPostActionType |
    UpdateNewPostTextActionType |
    UpdateNewMessageBodyType |
    SendMessageType |
    FollowType |
    UnfollowType |
    SetUsersType |
    SetCurrentPageType |
    SetTotalUsersCountType |
    ToggleIsFetchingType |
    ToggleIsFollowingInProgressType |
    SetUserProfileActionType |
    SetUserDataActionType |
    SetStatusActionType |
    InitializedSuccessActionType


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: SubscribeType
    dispatch: (action: ActionsTypes) => void
}
// const ADD_POST = "ADD-POST"
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
// const SEND_MESSAGE = "SEND-MESSAGE"

let store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 2},
                {id: 2, message: "Hi, what are you doing?", likesCount: 5},
                {id: 3, message: "It's my first post.", likesCount: 4},
            ],
            //newPostText: 'YoYoYo',
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
                "lookingForAJob": true,
                "lookingForAJobDescription": "",
                "fullName": "",
                "userId": "2",
                "photos": {
                    "small": "",
                    "large": ""
                }
            },
            status: "-"
        },
        dialogsPage: {
            dialogs: [
                {id: "1", name: "Vova"},
                {id: "2", name: "July"},
                {id: "3", name: "Sasha"},
                {id: "4", name: "Pasha"}
            ],
            messages: [
                {id: "1", message: "Hi"},
                {id: "2", message: "How are you?"},
                {id: "3", message: "Yo"},
            ]
        },
        sidebar: {},
        usersPage: {
            users: [
                {
                    // id: 1, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg?uselang=ru",
                    id: 1,
                    photos: {
                        small: "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg?uselang=ru",
                        large: ""
                    },

                    // followed: false, fullName: "Vladimir", status: 'Looking for life',
                    followed: false,
                    name: "Vladimir",
                    status: 'Looking for life',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    // id: 2, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg?uselang=ru",
                    id: 2,
                    photos: {
                        small: "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg?uselang=ru",
                        large: ""
                    },
                    // followed: true, fullName: "Alexey", status: 'His own director',
                    followed: true,
                    name: "Alexey",
                    status: 'His own director',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    // id: 3, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg?uselang=ru",
                    id: 3,
                    photos: {
                        small: "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg?uselang=ru",
                        large: ""
                    },

                    // followed: false, fullName: "Alexandr", status: 'My ship is on the waves',
                    followed: false,
                    name: "Alexandr",
                    status: 'My ship is on the waves',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 1,
            isFetching: false,
            followingInProgress: []
        }

    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
        // if (action.type === ADD_POST) {
        //     const newPost: postsType = {
        //         id: 4,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ""
        //     this._callSubscriber()
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber()
        //
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body
        //     this._callSubscriber()
        // } else if (action.type === SEND_MESSAGE) {
        //     let body: string = this._state.dialogsPage.newMessageBody
        //     this._state.dialogsPage.newMessageBody = ""
        //     this._state.dialogsPage.messages.push({id: "4", message: body})
        //     this._callSubscriber()
        // }
    }
}

// export const addPostAC = (): AddPostActionType => ({type: ADD_POST})
// export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType =>
//     ({type: UPDATE_NEW_POST_TEXT, newText: text})
//
// export const sendMessageAC = (): SendMessageType => ({type: SEND_MESSAGE})
// export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyType =>
//     ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store

// @ts-ignore
window.store = store
