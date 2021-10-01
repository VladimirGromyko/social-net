import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {UsersObjectType} from "./UsersContainer";
import axios from "axios";
import {toggleFollowingProgress} from "../../redux/users-reducer";

export type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersObjectType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetchingForFollowing:boolean) => void
    followingInProgress : boolean
}

let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p
                    ? styles.selectedPage : styles.unselectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress} onClick={() => {

                                props.toggleFollowingProgress(true)

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {'API-KEY': '1014996e-e720-41c1-aa67-e79020cddaa0'}
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress} onClick={() => {

                                props.toggleFollowingProgress(true)

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '1014996e-e720-41c1-aa67-e79020cddaa0'}
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false)
                                    })
                            }}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>
        )}
    </div>

}
export default Users