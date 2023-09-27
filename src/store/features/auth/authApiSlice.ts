
import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: credentials => ({
                url: '/auth/sign_in',
                method: 'POST',
                body: { ...credentials }
            })
        }),


    })
})

export const { useSignInMutation } = authApiSlice