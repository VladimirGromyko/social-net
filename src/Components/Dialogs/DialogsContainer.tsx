import React from "react";
import {ActionsTypes, RootStateType, SubscribeType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


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

// const DialogsContainer: React.FC<StoreOfType> = (props) => {
//
//     let state = props.store.getState().dialogsPage
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageAC())
//     }
//     let onNewMessageChange = (body:string) => {
//         let action = updateNewMessageBodyAC(body)
//         props.store.dispatch(action)
//     }
//     return (
//        <Dialogs updateNewMessageBody ={onNewMessageChange}
//                 sendMessage = {onSendMessageClick}
//                 dialogsPage = {state} />
//     )
// }

let mapStateToProps =(state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps =(dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageBody: (body:string) => {
            let action = updateNewMessageBodyAC(body)
            dispatch(action)

        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer