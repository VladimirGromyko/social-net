//import {rerenderEntireTree} from "../render";
type DialogsType = {
    id: string
    name: string
}

type MessagesType = {
    id: string
    message: string
}

type postsType = {
    id: number,
    message: string,
    likesCount: number
}

type ProfilePageType = {
    posts: Array<postsType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type sidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebarType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}

let store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 2},
                {id: 2, message: "Hi, what are you doing?", likesCount: 5},
                {id: 3, message: "It's my first post.", likesCount: 4},
            ],
            newPostText: 'YoYoYo'
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
        sidebar: {}
    },
    getState () {
      return this._state
    },
    _callSubscriber () {
    },
    addPost () {
        const newPost: postsType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber()
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }
}

// let rerenderEntireTree = () => {
// }

// let state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you?", likesCount: 2},
//             {id: 2, message: "Hi, what are you doing?", likesCount: 5},
//             {id: 3, message: "It's my first post.", likesCount: 4},
//         ],
//         newPostText: 'YoYoYo'
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: "1", name: "Vova"},
//             {id: "2", name: "July"},
//             {id: "3", name: "Sasha"},
//             {id: "4", name: "Pasha"}
//         ],
//         messages: [
//             {id: "1", message: "Hi"},
//             {id: "2", message: "How are you?"},
//             {id: "3", message: "Yo"},
//         ]
//     },
//     sidebar: {}
// }


// export const addPost = () => {
//     const newPost: postsType = {
//         id: 4,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ""
//     rerenderEntireTree()
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }
export default store

// @ts-ignore
window.store = store
