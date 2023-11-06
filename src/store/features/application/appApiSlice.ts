import { App } from "../../../interfaces/application.interface";
import { apiSlice } from "../api/apiSlice";

type AppResponse = App[]

export const appApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) =>({

        getAllApps: build.query<AppResponse ,void>({
            query: () => '/applications',
             keepUnusedDataFor: 5,
        }), 
        getSpecificApp: build.query<App, string>({
            query: (_id) => `/applications/${_id}`,
            // keepUnusedDataFor: 60
        }),
        deleteApp: build.mutation<{success: boolean; _id: number}, number>({
            query(_id) {
                return {
                    url: `/applications/${_id}`,
                    method: 'DELETE'
                }
            },

            invalidatesTags: (_result, _error, _id) => [{type: 'Apps', _id}]
        }),
        createApp: build.mutation<App, Partial<App>>({
            query(body) {
                return {
                    url: '/applications/create-app',
                    method: 'POST',
                    body,
                }
            },

            invalidatesTags: [{type: 'Apps', id: 'LIST'}],
        }),
        updateAppStatus: build.mutation<App, Partial<App>>({
            query(data) {
                const {_id, ...body} = data
                return {
                    url: `/applications/${_id}/status`,
                    method: 'PATCH',
                    body,
                }
            },

            invalidatesTags: (_result, _error, {_id}) => [{type: 'Apps', _id}],
        })
            
        
    }),
});


export const {
useGetAllAppsQuery, useGetSpecificAppQuery, useDeleteAppMutation, useCreateAppMutation, useUpdateAppStatusMutation
} = appApiSlice