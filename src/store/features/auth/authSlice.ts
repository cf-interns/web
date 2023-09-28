import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { User } from "../api/apiSlice";
import type { PayloadAction } from '@reduxjs/toolkit';



type AuthState = {

    user: User | null
 

}

const authSlice = createSlice({
    name: 'auth',
    initialState: {user:null, token: null} as AuthState,
    reducers: {
        setCredentials: (state, {payload: {user}}: PayloadAction<{user: User; token: string}>) => {
            // const {user, accessToken} = action.payload;
            state.user = user;
         
        },

        logOut: (state,) => {
            
            state.user = null;
           
        }
    },
  
});


export const {setCredentials, logOut} = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
// export const selectCurrentToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;