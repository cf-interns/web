import { User } from "../store/features/api/apiSlice";

export interface App {
	_id: string
	appName: string
	status: string
	createdAt: Date
	description: string
	live_api_key: string
	live_api_secret: string
	sandbox_api_key: string
	sandbox_api_secret: string
	mode: string
	author: User
}