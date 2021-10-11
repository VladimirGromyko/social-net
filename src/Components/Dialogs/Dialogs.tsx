import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import AddMessageForm, {AddMessageType} from "./AddMessageForm/AddMessageForm";


export type DialogsAndMessagesType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsAndMessagesType> = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>)

    // let newMessageBodyElements = state.newMessageBody

    const addNewMessage = (values: AddMessageType) => {
        props.sendMessage(values.newMessageBody)
    }
    //if (!props.isAuth) return <Redirect to= '/login' />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}
export default Dialogs