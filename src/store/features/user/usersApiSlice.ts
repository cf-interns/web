import {
	UpdateUserInfo,
	UserPassword,
} from "../../../interfaces/userData.interface"
import { User, apiSlice } from "../api/apiSlice"

type UserResponse = User[]

type UserChangePasswordResponse = UserPassword
// type ChangeUserInfoApiResponse = UpdateUserInfo

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query<UserResponse, void>({
			query: () => "/users",
			// keepUnusedDataFor: 5,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			providesTags: ['User']
		}),
		getSpecificUser: build.query<User, void>({
			query: () => `/users/`,
			keepUnusedDataFor: 1,
		}),
		changePassword: build.mutation<UserPassword, UserChangePasswordResponse>({
			query(body) {
				return {
					url: "users/passwords/change-password",
					method: "POST",
					body,
				}
			},
			invalidatesTags: [{ type: "User", id: "Password" }],
		}),
		updateUserInfo: build.mutation<object, UpdateUserInfo>({
			query(body) {
				return {
					url: "users/upadate-info",
					method: "PATCH",
					body,
				}
			},
		}),
		deleteUser: build.mutation<void, string>({
			query(id) {
				return {
					url: `users/${id}`,
					method: "DELETE",
				}
			},
			invalidatesTags: ['Apps']
		}),
	}),
})

export const {
	useGetUsersQuery,
	useGetSpecificUserQuery,
	useChangePasswordMutation,
	useUpdateUserInfoMutation,
    useDeleteUserMutation,
} = usersApiSlice
