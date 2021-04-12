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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs