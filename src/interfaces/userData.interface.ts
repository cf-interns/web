export interface UserPassword {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export interface UpdateUserInfo {
    firstName: string;
    lastName: string;
    email: string;
}