import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../../store'
import { setCredentials, logOut } from '../auth/authSlice';
import { REHYDRATE } from 'redux-persist';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
    hashedToken: string;
}

export interface UserResponse {
    user: User

}

const baseQuery = fetchBaseQuery({

    baseUrl: 'http://localhost:5000/api',
    credentials: 'include',
    prepareHeaders: (headers, /* { getState } */) => {

      /*   const token = (getState() as RootState).auth.token


        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        } */

        return headers
    }
});



const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {

    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {

        console.log('Sending refres token') //Send refresh token to get new access token

        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);
        console.log(refreshResult)

        if (refreshResult?.data) {

            const user = (api.getState() as RootState).auth.user! /* The exclamation mark is the non-null assertion operator in TypeScript.
            It removes null and undefined from a type without doing any explicit type checking. */;

            //Store new token
            api.dispatch(setCredentials({

                ...refreshResult.data, user,
               
            }));

            //Retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result;
}


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    extractRehydrationInfo(
        action, {reducerPath}
    ) {
        if(action.type === REHYDRATE) {
            return action.payload[reducerPath]
        }

        if (
            action.type === REHYDRATE &&
            action.key === 'root'
          ) {
            return action.payload
          }
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endpoints: _builder => ({})
})

