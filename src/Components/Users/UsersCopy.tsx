import React from "react";
import styles from "./users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import { UsersObjectType } from "./UsersContainer";


type UsersPropsType = {
    users: Array<UsersObjectType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UsersObjectType>) => void
}

let Users = (props: UsersPropsType) => {
    let getUsers = () => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
            props.setUsers(response.data.items)
        })
    }
    }
    // props.setUsers([
    //
    //         {
    //             id: 1,
    //             photoUrl: "https://www.vokrug.tv/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg",
    //             followed: false,
    //             fullName: "Vladimir",
    //             status: 'I am subscribed to life',
    //             location: {city: 'Minsk', country: 'Belarus'}
    //         },
    //         {
    //             id: 2,
    //             photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/43ad37ff-34c4-4ebc-9f0a-2f2eaa41a18d/280x420",
    //             followed: true,
    //             fullName: "Donald",
    //             status: 'I am my own director',
    //             location: {city: 'New York', country: 'USA'}
    //         },
    //         {
    //             id: 3,
    //             photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg?uselang=ru",
    //             followed: false,
    //             fullName: "Dmitriy",
    //             status: 'My ship is on the waves',
    //             location: {city: 'Moscow', country: 'Russia'}
    //         },
    //     ])
    //}
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
{/*                        <img src={u.photoUrl} className={styles.userPhoto}/>*/}
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
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
            )
        }
    </div>
}
export default Users