import { configureStore} from "@reduxjs/toolkit";
import { apiSlice } from './features/api/apiSlice';

import authReducer from './features/auth/authSlice.ts';
import appReducer from './features/application/appSlice.ts';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore,} from "redux-persist";


const persistConfig = {

    key: 'root',
    version: 1,
    storage //check other engines
}

const persistedReducer = persistReducer(persistConfig,authReducer)

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedReducer,
        app: appReducer
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {

            ignoreActions: true
        }
    }).concat(apiSlice.middleware),
    devTools: true,
  
});

export const persistor = persistStore(store);

//Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>

//Infered types: {user: UserStae}
export type AppDispatch = typeof store.dispatch