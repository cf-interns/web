import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { Notification } from "../../../interfaces/notifications.interface"

type NotificationsState = {
	notification: Notification[]
}

const notificationSlice = createSlice({
	name: "notifications",
	initialState: { notification: [] } as NotificationsState,
	reducers: {
		setUpNotifications: (state, { payload: notification }) => {
			// console.log("Update store", notification)
			state = {
				...state,
				notification,
			}

			return state
		},
	},
})

export const { setUpNotifications } = notificationSlice.actions
export const selectCurrentNotification = (state: RootState) =>
	state.notification

export default notificationSlice.reducer
