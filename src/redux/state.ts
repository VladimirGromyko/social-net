import {rerenderEntireTree} from "../render";

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

let state: RootStateType = {
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
}

export let addPost = () => {
    const newPost: postsType = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText= newText
    rerenderEntireTree(state)
}
export default state