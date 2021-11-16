import React from "react";
import {UsersObjectType} from "./UsersContainer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

export type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersObjectType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

let Users = ({
                 totalUsersCount, pageSize, currentPage,
                 onPageChanged, users, ...props
             }: UsersPropsType) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>
        <div>
            {users.map((u) =>
                <User user={u}
                      follow={props.follow}
                      unfollow={props.unfollow}
                      followingInProgress={props.followingInProgress}
                      key={u.id}/>
            )}
        </div>
    </div>

}
export default Users