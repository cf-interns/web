import { Email, Push, SMS } from "../../../interfaces/appService.interface"
import { App } from "../../../interfaces/application.interface"
import { apiSlice } from "../api/apiSlice"

type AppResponse = App[]
//  type SMSResponse = SMS[];
type EmailResponse = Email[]
type PushResponse = Push[]
type SmsResponse = SMS[]

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
		sendAutomaticEmail: build.mutation<EmailResponse, Partial<Email>>({
			query({ id, text, time, to, from, subject }) {
				return {
					url: `/notifications/automatic-emails/${id}`,
					method: "POST",
					body: { text, time, to, from, subject },
				}
			},
			invalidatesTags: ["Notifications"],
		}),
		sendPush: build.mutation<PushResponse, Partial<Push>>({
			query({ id, notification, userToken }) {
				return {
					url: `/notifications/send-push/${id}`,
					method: "POST",
					body: { notification, userToken },
				}
			},
			invalidatesTags: ["Notifications"],
		}),
		sendSMS: build.mutation<SmsResponse, Partial<SMS>>({
			query({ id, message, mobiles }) {
				return {
					url: `/notifications/send-sms/${id}`,
					method: "POST",
					body: { message, mobiles },
				}
			},
			invalidatesTags: ["Notifications"],
		}),
		sendAutomaticSMS: build.mutation<EmailResponse, Partial<SMS>>({
			query({ message, mobiles, time, id }) {
				return {
					url: `notifications/automatic-sms/${id}`,
					method: "POST",
					body: { message, mobiles, time },
				}
			},
			invalidatesTags: ["Notifications"],
		}),
		sendAutomaticPushMessage: build.mutation<PushResponse, Partial<Push>>({
			query({ id, notification, userToken, time }) {
				return {
					url: `notifications/automatic-push/${id}`,
					method: 'POST',
					body: {notification, userToken, time}
				}
			},
			invalidatesTags:['Notifications']
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

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		deleteApp: build.mutation<{ success: boolean; _id: number }, any>({
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
	useSendAutomaticEmailMutation,
	useSendAutomaticSMSMutation,
	useSendAutomaticPushMessageMutation
} = appApiSlice
