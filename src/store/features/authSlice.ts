import { createAsyncThunk } from "@reduxjs/toolkit";


export interface User{

    _id:number;
    firstName:string;
    lastName:string;
    email:string

}



const initialState = {
    token: localStorage.getItem('token'),
    firstName: '',
    lastName: '',
    email: '',
    _id: '',
    isAdmin: '',
    registerStatus: '',
    registerError: '',
    loginStatus: '', 
    loginError: '',
    userLoaded: false
};


export const registerUser = createAsyncThunk('auth/register', async (data, {rejectWithValue}) => {
  
})