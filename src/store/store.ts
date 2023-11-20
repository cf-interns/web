import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { apiSlice } from './features/api/apiSlice';

import authReducer from './features/auth/authSlice.ts';
import appReducer from './features/application/appSlice.ts';
import notificationReducer from './features/notifications/notificationsSlice.ts'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore,} from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";


const rootpersistConfig = {

    key: 'root',
    version: 1,
    storage, 
    //check other engines
    //  blacklist: ['notification']
}

const rootReducer = combineReducers({

    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    app: appReducer,
    notification: notificationReducer
})

const persistedReducer = persistReducer(rootpersistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,

    /* {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedReducer,
        app: appReducer
    } */

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

setupListeners(store.dispatch)