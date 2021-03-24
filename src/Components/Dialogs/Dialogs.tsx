import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


/*type DialogItemType = {
    name: string
    id: string
}
type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>

}*/

const Dialogs = () => {
    let dialogs = [
        {id: "1", name: "Vova"},
        {id: "2", name: "July"},
        {id: "3", name: "Sasha"},
        {id: "4", name: "Pasha"}
    ]
    let messages = [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "Yo"},
    ]

    let dialogsElements = dialogs
        .map(d=> <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages
        .map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
{/*
                <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Pasha" id="4"/>
*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
{/*
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message="Yo"/>
*/}
            </div>
        </div>
    )
}
export default Dialogs