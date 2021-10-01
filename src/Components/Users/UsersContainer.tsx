import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {
    follow, getUsers,
    // setCurrentPage,
    // setTotalUsersCount,
    // setUsers,
    // toggleIsFetching,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
//import {usersAPI} from "../../api/api";

type locationType = {
    city: string,
    country: string
}
type photosType = {
    small: string,
    large: string
}
export type UsersObjectType = {
    id: number,
    photos: photosType,
    // photoUrl: string,
    followed: boolean,
    name: string,
    //fullName: string,
    status: string,
    location: locationType
}

type UsersContainerPropsType = {
    users: Array<UsersObjectType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    //setUsers: (users: Array<UsersObjectType>) => void,
    //setCurrentPage: (pageNumber: number) => void,
    //setTotalUsersCount: (totalUsersCount: number) => void,
    //toggleIsFetching: (isFetching: boolean) => void,
    toggleFollowingProgress: (isFetchingForFollowing: boolean, userId: number) => void,
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //
        //     })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //     usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   //toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersObjectType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNamber: number) => {
//             dispatch(setCurrentPageAC(pageNamber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
export default connect(mapStateToProps,
    {
        follow, unfollow,
        //setUsers, setCurrentPage,
        //setTotalUsersCount, toggleIsFetching,
        toggleFollowingProgress, getUsers
    })(UsersContainer)

//export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)