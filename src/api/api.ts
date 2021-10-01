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
    headers: {'API-KEY': '1014996e-e720-41c1-aa67-e79020cddaa0'}
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 30) {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}