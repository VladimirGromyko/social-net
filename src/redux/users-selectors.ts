import {RootStateType} from "./store";
import {createSelector} from "reselect";

const getUsersSelectors =(state:RootStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelectors,(users) => {
    return users.filter(u => true)
})

export const getPageSize =(state:RootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount =(state:RootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage =(state:RootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching =(state:RootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress =(state:RootStateType) => {
    return state.usersPage.followingInProgress
}