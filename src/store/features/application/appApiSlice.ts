import { Email, Push, SMS } from "../../../interfaces/appService.interface"
import { App } from "../../../interfaces/application.interface"
import { apiSlice } from "../api/apiSlice"

type AppResponse = App[]
//  type SMSResponse = SMS[];
type EmailResponse = Email[]
type PushResponse = Push[]

export const appApiSlice = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		sendEmail: build.mutation<EmailResponse, Partial<Email>>({
			query({ id, text, to, from, subject }) {
				return {
					url: `/notifications/send-email/${id}`,
					method: "POST",
					body: { text, subject, to, from },
				}
			},
			invalidatesTags: ["Notifications"],
		}),
		sendPush: build.mutation<PushResponse, Partial<Push>>({
			query({ id, notification, token }) {
				return {
					url: `/notifications/send-notification/${id}`,
					method: "POST",
					body: { notification, token },
				}
			},
			invalidatesTags: ["Notifications"],
		}),
		sendSMS: build.mutation<EmailResponse, Partial<SMS>>({
			query({ id, message, mobiles }) {
				return {
					url: `/notifications/send-sms/${id}`,
					method: "POST",
					body: { message, mobiles },
				}
			},
			invalidatesTags: ["Notifications"],
		}),

		getAllApps: build.query<AppResponse, void>({
			query: () => "/applications",
			keepUnusedDataFor: 5,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			providesTags: ["Apps"],
		}),

		/* 
        getSpecificApp: build.query<App, void>({
        }),  */
		getSpecificApp: build.query<App, string>({
			query: (_id) => `/applications/${_id}`,
			// keepUnusedDataFor: 60
			providesTags: ["Apps"],
		}),

		deleteApp: build.mutation<{ success: boolean; _id: number }, number>({
			query(_id) {
				return {
					url: `/applications/${_id}`,
					method: "DELETE",
				}
			},

			invalidatesTags: (_result, _error, _id) => [{ type: "Apps", _id }],
		}),

		createApp: build.mutation<App, Partial<App>>({
			query(body) {
				return {
					url: "/applications/create-app",
					method: "POST",
					body,
				}
			},

			invalidatesTags: ["Apps"],
		}),

		updateAppStatus: build.mutation<App, Partial<App>>({
			query(data) {
				const { _id, ...body } = data
				return {
					url: `/applications/${_id}/status`,
					method: "PATCH",
					body,
				}
			},

			invalidatesTags: (_result, _error, { _id }) => [{ type: "Apps", _id }],
		}),
	}),
})

export const {
	useGetAllAppsQuery,
	useGetSpecificAppQuery,
	useDeleteAppMutation,
	useCreateAppMutation,
	useUpdateAppStatusMutation,
	useSendEmailMutation,
	useSendSMSMutation,
	useSendPushMutation,
} = appApiSlice
