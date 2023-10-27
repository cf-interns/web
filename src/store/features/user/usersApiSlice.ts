
import { UserPassword } from "../../../interfaces/userPassword.interface";
import { User, apiSlice } from "../api/apiSlice";

type UserResponse = User[]

type UserChangePasswordResponse = UserPassword

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query<UserResponse, void>({
            query: () => '/users',
            // keepUnusedDataFor: 5,
        }),
        getSpecificUser: build.query<User, void>({
            query: () => `/users/`,
            // keepUnusedDataFor: ,
        }),
        changePassword: build.mutation<UserPassword, UserChangePasswordResponse>({
            query(body) {
                return {
                    url: '/users/change-password',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: [{ type: 'Passwords', id: 'PASS' }],
        })
    })
})

export const { useGetUsersQuery, useGetSpecificUserQuery, useChangePasswordMutation } = usersApiSlice