import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {creatField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../../redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'

export type CaptchaType = {
    captchaUrl: string | null
}

export type LoginFormValueType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValueTypeKeys = Extract<keyof LoginFormValueType, string>

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValueType, CaptchaType> & CaptchaType> =
    ({handleSubmit, error, captchaUrl}) => {
        return (
            <form onSubmit={handleSubmit}>
                {creatField('Email', 'email', [required], Input)}
                {creatField('Password', 'password', [required],
                    Input, {type: 'Password'})}

                {creatField(null, 'rememberMe', [],
                    Input, {type: 'checkbox'}, 'remember me')}

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && creatField('Symbols from image', 'captcha',
                    [required], Input, {type: ''})}

                {error && <div className={style.formSummaryError}>{error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }
const LoginReduxForm = reduxForm<LoginFormValueType, CaptchaType>({form: 'login'})(LoginForm)

const Login = (props: MapStatePropsType & MapDispatchPropsType) => {
    const onSubmit = (formData: LoginFormValueType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state: AppStoreType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)
