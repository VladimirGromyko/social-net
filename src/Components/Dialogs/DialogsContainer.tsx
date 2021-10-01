import React from "react";
import {ActionsTypes, RootStateType, SubscribeType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs, {DialogsAndMessagesType} from "./Dialogs";
import { connect } from "react-redux";
import {UserDataType} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

let mapStateToProps =(state: AppStoreType) => {
    return {
        dialogsPage: state.dialogsPage,
        //isAuth: state.auth.isAuth
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


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// // let AuthRedirectComponent = (props: DialogsAndMessagesType) => {
// //     if (!props.isAuth) return <Redirect to= '/login' />
// //     return <Dialogs { ... props}/>
// // }
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
//
// export default DialogsContainer

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)