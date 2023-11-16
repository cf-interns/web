import { App } from "./application.interface"

export interface Notification {
	_id: string

	title?: string

	body?: string

	icon_url?: string

	author?: App

	recipient?: string

	external_id: string

	created_at: Date

	status: string

	token: string

	provider?: string

	request_data: string

	response_data: string

	sent_by: string

	subject: string

	notification_type: string

	timeData: string
}
