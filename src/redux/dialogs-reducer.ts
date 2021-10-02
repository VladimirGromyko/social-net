import {ActionsTypes, DialogsPageType} from "./store";

// type UpdateNewMessageBodyType = {
//     type: "UPDATE-NEW-MESSAGE-BODY",
//     body: string
// }
type SendMessageType = {
    type: "SEND-MESSAGE"
    newMessageBody: string
}

// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
}
const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY: {
        //     return {
        //         ...state,
        //         newMessageBody: action.body
        //     }
        // }
        case SEND_MESSAGE: {
            let body: string = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: "4", message: body}]
            }
        }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody: string): SendMessageType => ({type: SEND_MESSAGE, newMessageBody})
// export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyType =>
//     ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer