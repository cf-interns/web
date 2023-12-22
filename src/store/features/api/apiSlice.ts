import {
	BaseQueryApi,
	FetchArgs,
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"
import type { RootState } from "../../store"
import { setCredentials, logOut } from "../auth/authSlice"
// import { REHYDRATE } from 'redux-persist';

export interface User {
	firstName: string
	lastName: string
	email: string
	_id: string

}

export interface UserResponse {
	user: User
}

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:5000/api",
	credentials: "include",
	prepareHeaders: (headers /* { getState } */) => {
	return headers
	},
})

const baseQueryWithReauth = async (
	args: string | FetchArgs,
	api: BaseQueryApi,
	extraOptions: object
) => {
	let result = await baseQuery(args, api, extraOptions)

	//Get refresh Token If 401 returned
	if (result?.error?.status === 401) {
		console.log("Sending refres token") 

		const refreshResult = await baseQuery("/auth/refresh", api, extraOptions)
		

		if (refreshResult?.data) {
			const user = (api.getState() as RootState).auth
				.user! /* The exclamation mark is the non-null assertion operator in TypeScript.
            It removes null and undefined from a type without doing any explicit type checking. */

			//Store new token
			api.dispatch(
				setCredentials({
					...refreshResult.data,
					user,
				})
			)

			//Retry the original query with new access token
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(logOut())
			
		}
	}

	//Manually refectch Notifications every minute
		setTimeout(() => {
			api.dispatch(apiSlice.util.invalidateTags(["Notifications"]))
		}, 60000)


	return result
}

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Apps", "User", "Notifications"],
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	endpoints: (_builder) => ({}),
	refetchOnMountOrArgChange: true,
	keepUnusedDataFor: 60,
	
	
	
});

