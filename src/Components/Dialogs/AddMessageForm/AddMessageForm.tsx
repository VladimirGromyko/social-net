import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


export type AddMessageType = {
    newMessageBody: string
}
const maxLength = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} placeholder="Enter you message"
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export default reduxForm<AddMessageType>({form: 'AddMessageForm'})(AddMessageForm)