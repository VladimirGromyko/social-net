<<<<<<< HEAD
import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


export type DialogsElementType = {
    id: string
    name: string
}
export type MessagesElementType = {
    id: string
    message: string
}
type DialogsAndMessagesType = {
    dialogs : Array <DialogsElementType>
    messages: Array <MessagesElementType>
}
type stateType = {
    state: DialogsAndMessagesType
}

const Dialogs:React.FC<stateType> = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>)
=======
import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";


type DialogsAndMessagesType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const Dialogs: React.FC<DialogsAndMessagesType> = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>)

    let newMessageBodyElements = props.dialogsPage.newMessageBody

    let onSendMessageClick = () => props.sendMessage()

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
<<<<<<< HEAD
                {messagesElements}
=======
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBodyElements}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter you message"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
            </div>
        </div>
    )
}
export default Dialogs