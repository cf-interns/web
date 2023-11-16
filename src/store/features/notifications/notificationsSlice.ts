import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../store";


type NotificationsState = {

    notification: Notification | null
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: {notification: null} as NotificationsState,
    reducers: {
        setUpNotifications: (state, {payload: {notification}}: PayloadAction<{notification: Notification}>) => {
            state.notification = notification;
        },
    } 
});

export const { setUpNotifications } = notificationSlice.actions;
export const selectCurrentNotification = (state: RootState) => state.notification

export default notificationSlice.reducer