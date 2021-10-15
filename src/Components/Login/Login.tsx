import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, UserDataType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../../redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'

type FormDataType= {
    email: string
    password: string
    rememberMe: boolean

}
type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email:string, password:string, rememberMe:boolean) => void
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} placeholder={'Email'} name="email"
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={Input} name="password" type={'Password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name="rememberMe"/>remember me
            </div>
            {/*{props.error && <div className={style.formSummaryError}>{props.error}</div>}*/}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login= (props:MapStatePropsType & MapDispatchPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state:AppStoreType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login)
