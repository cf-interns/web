import { configureStore} from "@reduxjs/toolkit";
import { apiSlice } from './features/api/apiSlice';

import authReducer from './features/auth/authSlice.js';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

//Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>

//Infered types: {user: UserStae}
export type AppDispatch = typeof store.dispatch