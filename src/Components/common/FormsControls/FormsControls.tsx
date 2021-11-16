import React from "react";
import style from './FormsControls.module.css'
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form/lib/Field";
import {Field} from "redux-form";
import {FieldValidatorType, required} from "../../../utils/validators/validators";

type FormsControlsPropsType = {
    meta: WrappedFieldMetaProps
}
export const FormControl:
    React.FC<FormsControlsPropsType> = (
    {
        meta: {touched, error},
        children
    }) => {
    const hasError = touched && error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
                {/*                <textarea {...input} {...props}/>*/}
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
// type CreatFieldPropsType = {
//     placeholder: 'Email' | 'Password' | null
//     name: string
//     validators: Array<FieldValidatorType>
//     component: React.FC<WrappedFieldProps>
//     props: {
//         type: 'Password' | 'checkbox'
//     }
//     text: string
// }
type CreatFieldRestPropsType = {
        type: 'Password' | 'checkbox'| ''
}

export const creatField = (placeholder: string | null,
                           name: string,
                           validators: Array<FieldValidatorType>,
                           component: React.FC<WrappedFieldProps>,
                           props:CreatFieldRestPropsType={type:''},
                           text: string = '') => (
     <div>
        <Field placeholder={placeholder} name={name}
               validate={validators} component={component}
               {...props}/>{text}
    </div>
)

