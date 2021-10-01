import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
<<<<<<< HEAD
    return(
=======
    return (
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
        <nav className={s.nav}>
            <div className={s.item}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
<<<<<<< HEAD
=======
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
>>>>>>> 5af59c8 (09-09-2021 commit - with usersAPI)
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;