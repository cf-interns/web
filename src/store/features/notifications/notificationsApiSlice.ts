import { apiSlice } from "../api/apiSlice";
// import { Notification } from "../../../interfaces/notifications.interface";

type filterDto = {
    notification_type: string,
    status: string,
    searchTermInTitle: string
}
type NotificationApiResponse = {
	notifications: [],
	count: number,
};
type queryParams = {
    appToken: string,
    offset?: number,
    limit?: number,
    filters?: filterDto
}

export const notificationApiSlice = apiSlice.injectEndpoints({
	endpoints: (build) => ({
		getAllNotifications: build.query<NotificationApiResponse, queryParams>({
			query(args) {
				const { appToken } = args
				return {
					url: `notifications/all-notifications/${appToken}`, 
				}
			},
			providesTags: ['Notifications'],
			// invalidatesTags: (_id) => [{type: 'Notifications', _id}]
			// getTotalSMS: 
		}),
	}),
})


export const {useGetAllNotificationsQuery} = notificationApiSlice