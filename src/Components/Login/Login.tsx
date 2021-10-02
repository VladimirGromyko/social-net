import React from "react";

//import {Form, Field} from 'react-final-form'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType= {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" placeholder={'Login'} name="login"/>
            </div>
            <div>
                <Field placeholder={'Password'} component="input" name="password"/>
            </div>
            <div>
                <Field type={'checkbox'} component="input" name="rememberMe"/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

    /* <Form
         onSubmit={() => {
         }}
         validate={(values) => {
             const errors = {lodinName: "", password: ""};
             if (!values.lodinName) {
                 errors.lodinName = "Required";
             }
             if (!values.password) {
                 errors.password = "Required";
             }
             // if (!values.confirm) {
             //     errors.confirm = "Required";
             // } else if (values.confirm !== values.password) {
             //     errors.confirm = "Must match";
             // }
             return errors;
         }}
         render={({handleSubmit}) => (

             <form>
                 <div>
                     <Field component="input" placeholder={'Login'} name="lodin"/>
                 </div>
                 <div>
                     <Field placeholder={'Password'} component="input" name="password"/>
                 </div>
                 <div>
                     <Field type={'checkbox'} component="input" name="rememberMe"/>remember me
                 </div>
                 <div>
                     <button>Login</button>
                 </div>
             </form>
         )}
     />
     )*/
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log('formData:', formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login