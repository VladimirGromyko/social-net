import React from "react";
import styles from './FormsControls.module.css'
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form/lib/Field";

// TYPES video 08 - Redux-Form + TypeScript + Generic или как решать проблемы / React JS - Путь Самурая 2.0
// time: 54 +/-
type FormsControlsPropsType = {
    meta: WrappedFieldMetaProps
}
export const FormControl:
    React.FC<FormsControlsPropsType> = ({
                                            meta: {
                                                touched,
                                                error
                                            },
                                            children
                                        }) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
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

