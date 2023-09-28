
import { User, apiSlice } from "../api/apiSlice";

type UserResponse = User[]

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query<UserResponse, void>({
            query: () => '/users',
            keepUnusedDataFor: 5,
        })
    })
})

export const {useGetUsersQuery} = usersApiSlice