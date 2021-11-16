import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {
    follow, requestUsers,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";


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

export type ObjPropKeyType = "id" | "photos" | "followed" | "name" | "status" | "location"
export type ObjPropValueType = number | photosType | boolean | string | locationType
export type ObjPropNameType = { id: number } | { photos: photosType } |
    { followed: boolean } | { name: string } | { status: string } | { location: locationType }

type UsersContainerPropsType = {
    users: Array<UsersObjectType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    toggleFollowingProgress: (isFetchingForFollowing: boolean, userId: number) => void,
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
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
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, getUsers: requestUsers}),
    //withAuthRedirect
)(UsersContainer)