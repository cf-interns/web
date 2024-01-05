import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import type { PayloadAction } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { App } from "../../../interfaces/application.interface"
import { User } from "../api/apiSlice"

type AuthState = {
	user: User | null
	app:  App | null
}

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, app: null } as AuthState,
	reducers: {
		setCredentials: (
			state,
			{ payload: { user } }: PayloadAction<{ user: User }>
		) => {
			// const {user, accessToken} = action.payload;
			state.user = user
		},

		logOut: (state) => {
			storage.removeItem("persist:root")
			localStorage.removeItem("user")
			state.user = null
			window.location.href = "/"
			//    state.app =

			/* 
            state.user = null;
            localStorage.removeItem('persist:root')
            */
		},
	},
})

export const { setCredentials, logOut } = authSlice.actions
export const selectCurrentUser = (state: RootState) => state.auth.user
// export const selectCurrentToken = (state: RootState) => state.auth.token;

export default authSlice.reducer
