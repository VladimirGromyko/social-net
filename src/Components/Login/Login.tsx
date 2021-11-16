import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {creatField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, UserDataType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../../redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean

}
type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {creatField('Email', 'email', [required], Input)}
            {creatField('Password', 'password', [required], Input, {type: 'Password'})}
            {creatField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: MapStatePropsType & MapDispatchPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)
