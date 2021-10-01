import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";


type DialogsAndMessagesType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    isAuth: boolean
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
    if (!props.isAuth) return <Redirect to= '/login' />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
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
            </div>
        </div>
    )
}
export default Dialogs