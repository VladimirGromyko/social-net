import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './header.module.css';
import {ActionsTypes, SetUserDataActionType} from "../../redux/store";
import { HeaderContainerPropsType } from './headerContainer';

//type HeaderContainerPropsType = any

//     {
//     isAuth: boolean
//     login: null | string
//     setAuthUsersData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => void
// }

const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            {/*<img src="logo_color.jpg" alt=""/>*/}
            <img
                src="data:image/png;base64,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"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log Out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;