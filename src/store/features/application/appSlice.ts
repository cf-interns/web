import { createSlice } from "@reduxjs/toolkit"
import { App } from "../../../interfaces/application.interface"
import type { PayloadAction } from '@reduxjs/toolkit';
// import App from "../../../App";
import { RootState } from "../../store";


type AppState = {
    
    app: App | null
}

const appSlice = createSlice({

    name: 'app',
    initialState: {app: null} as AppState,
    reducers: {
        setUpApplications: (state, {payload: {app}}: PayloadAction<{app: App}>) => {
             state.app = app;
        },
    }
});


export const {setUpApplications} = appSlice.actions;
 export const selectCurrentApp = (state: RootState) => state.app.app;

export default appSlice.reducer