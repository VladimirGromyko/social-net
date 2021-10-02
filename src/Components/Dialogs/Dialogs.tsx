import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {reduxForm, Field, InjectedFormProps} from "redux-form";


export type DialogsAndMessagesType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean
}
type AddMessageType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                        <Field component={'textarea'} name={'newMessageBody'} placeholder="Enter you message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}


const AddMessageReduxForm = reduxForm<AddMessageType>({
    form: 'AddMessageForm'
})(AddMessageForm)

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
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

//Video 76 time 17.48

export default Dialogs