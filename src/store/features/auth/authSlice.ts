import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { User } from "../api/apiSlice";
import type { PayloadAction } from '@reduxjs/toolkit';



type AuthState = {

    user: User | null
    token: string | null

}

const authSlice = createSlice({
    name: 'auth',
    initialState: {user:null, token: null} as AuthState,
    reducers: {
        setCredentials: (state, {payload: {user, token}}: PayloadAction<{user: User; token: string}>) => {
            // const {user, accessToken} = action.payload;
            state.user = user;
            state.token = token;
        },

        logOut: (state,) => {
            
            state.user = null;
            state.token = null
        }
    },
  
});


export const {setCredentials, logOut} = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;