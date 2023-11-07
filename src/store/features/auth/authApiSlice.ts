
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
        signUp: builder.mutation({
            query: credentials => ({
                url: '/auth/sign_up',
                method: 'POST',
                body: {...credentials}
            })
        }),

        resetPassword: builder.mutation({
            query: credentials => ({
                url: 'users/passwords/reset-password',
                method: 'POST',
                body: {...credentials}
            })
        }),

        forgotPassword: builder.mutation({
            query: credentials => ({
                url: 'users/passwords/forgot-password',
                method: 'POST',
                body: {...credentials}
            })
        })


    })
})

export const { useSignInMutation, useSignUpMutation, useResetPasswordMutation, useForgotPasswordMutation } = authApiSlice