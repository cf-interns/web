import { Email, Push, SMS,  } from "../../../interfaces/appService.interface";
import { App } from "../../../interfaces/application.interface";
import { apiSlice } from "../api/apiSlice";

type AppResponse = App[];
//  type SMSResponse = SMS[];
type EmailResponse = Email[];
 type PushResponse = Push[];

export const appApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) =>({

        sendEmail: build.mutation<EmailResponse, Partial<Email>>({
           query({id, text,to,from, subject}) {
               return {
                url: `/email/sendmail/${id}`,
                method: 'POST',
                body: {text, subject,to, from}
               }
           },
        }),
        sendPush: build.mutation<PushResponse, Partial<Push>>({
            query({id,notification, token}) {
                return {
                    url: `/notifications/send-notification/${id}`,
                    method: 'POST',
                    body: {notification, token}
                }
            }
        }),
        sendSMS: build.mutation<EmailResponse, Partial<SMS>>({
            query({id, message, mobiles}){
                return {
                    url: `/sms/sendsms/${id}`,
                    method: 'POST',
                    body: {message, mobiles}
                }
            }
        }),

        getAllApps: build.query<AppResponse ,void>({
            query: () => '/applications',
             keepUnusedDataFor: 5,
        }),


        getSpecificApp: build.query<App, void>({
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
                    url: `/applications/${_id}`,
                    method: 'PATCH',
                    body
                }
            },

            invalidatesTags: (_result, _error, {_id}) => [{type: 'Apps', _id}],
        }),
        
            
        
    }),
});


export const {
useGetAllAppsQuery, useGetSpecificAppQuery, useDeleteAppMutation, useCreateAppMutation, useUpdateAppStatusMutation, useSendEmailMutation, useSendSMSMutation, useSendPushMutation
} = appApiSlice