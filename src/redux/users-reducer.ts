import {ActionsTypes} from "./store";
import {UsersObjectType} from "../Components/Users/UsersContainer";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";
import {updateObjectInArray} from "../utils/object-helpers";

type FollowType = {
    type: "FOLLOW",
    userId: number
}
type UnfollowType = {
    type: "UNFOLLOW",
    userId: number
}
type FollowUnfollowType = FollowType | UnfollowType

type SetUsersType = {
    type: "SET_USERS",
    users: Array<UsersObjectType>
}
type SetCurrentPageType = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
type SetTotalUsersCountType = {
    type: "SET_TOTAL_USERS_COUNT",
    count: number
}
type ToggleIsFetchingType = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}
type ToggleIsFollowingInProgressType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetchingForFollowing: boolean,
    userId: number
}
export type UsersType = {
    users: Array<UsersObjectType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState : UsersType = {
    users: [
        // {
        //     id: 1, photoUrl: "https://www.vokrug.tv/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg",
        //     followed: false, fullName: "Vladimir", status: 'I am subscribed to life',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2, photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/43ad37ff-34c4-4ebc-9f0a-2f2eaa41a18d/280x420",
        //     followed: true, fullName: "Donald", status: 'I am my own director',
        //     location: {city: 'New York', country: 'USA'}
        // },
        // {
        //     id: 3, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg?uselang=ru",
        //     followed: false, fullName: "Dmitriy", status: 'My ship is on the waves',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
    ],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state= initialState, action: ActionsTypes):UsersType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u
                // })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })*/
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
            //return { ...state, users: [...state.users, ...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress:
                    action.isFetchingForFollowing
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId),
                //userId: action.userId
            }
        }

        default:
            return state
    }
}
export const followSuccess = (userId: number): FollowType => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number): UnfollowType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UsersObjectType>): SetUsersType => ({type: SET_USERS, users: users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetchingForFollowing: boolean, userId: number): ToggleIsFollowingInProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetchingForFollowing,
    userId
})
type DispatchType = Dispatch<ActionsTypes>
export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: DispatchType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        const data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))

    }
}
const followUnfollowFlow = async (dispatch: DispatchType, userId: number,
                                  apiMethod: (userId: number) => Promise<AxiosResponse<any>>,
                                  actionCreator: (userId: number) => FollowUnfollowType) => {

    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId: number) => {
    return async (dispatch: DispatchType) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: DispatchType) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
// video 90 time 22.50
export default usersReducer