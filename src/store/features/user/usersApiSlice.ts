
import { UserPassword } from "../../../interfaces/userPassword.interface";
import { User, apiSlice } from "../api/apiSlice";

type UserResponse = User[]

type UserChangePasswordResponse = UserPassword

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        getUsers: build.query<UserResponse, void>({
            query: () => '/users',
            // keepUnusedDataFor: 5,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            providesTags: (result, error, arg) => result ? [...result.map(({_id}) => ({type: 'User' as const, _id })), 'User'] : ['User']
        }),
        getSpecificUser: build.query<User, void>({
            query: () => `/users/`,
            keepUnusedDataFor: 1,
        }),
        changePassword: build.mutation<UserPassword, UserChangePasswordResponse>({
            query(body) {
                return {
                    url: 'users/passwords/change-password',
                    method: 'POST',
                    body
                }
            },
            invalidatesTags: [{ type: 'User', id: 'Password' }],
        }),
    })
})

export const { useGetUsersQuery, useGetSpecificUserQuery, useChangePasswordMutation } = usersApiSlice