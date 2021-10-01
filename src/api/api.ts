import axios from "axios";
import {UsersObjectType} from "../Components/Users/UsersContainer";

type getUsersResponseType = {
    items: Array<UsersObjectType>,
    totalCount: number,
    error: string | null
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '08f8988c-36d5-478a-8bca-6bc3626a17f4'}
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 30) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}