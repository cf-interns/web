import { User } from "../store/features/api/apiSlice";

export interface  App {
    _id: string;
    appName: string;
    status: string;
    createdAt: Date;
    description: string;
    token: string;
    author: User;
}