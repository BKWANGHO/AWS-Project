import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserAPI, findAllUsersAPI, findUserByIdAPI, loginAPI, modifyUserAPI, userCountAPI } from "./user-api";
import { IUser } from "../model/user.model";


export const findAllUsers:any = createAsyncThunk(
    'users/findAllUsers',
    async (page:number)=>{
    const data : any =await findAllUsersAPI(10);

    return data
    })

export const findUserById : any = createAsyncThunk(
    'users/findUserById',
     async (id:number)=>{
    const data:any = await findUserByIdAPI(id);
    return data
})

export const modifyUser : any = createAsyncThunk(
    'users/modifyUser',
     async (dto:IUser)=>{
    const data:any = await modifyUserAPI(dto);
    return data
})

export const userCount : any = createAsyncThunk(
    'users/userCount',
     async ()=>{
    const data:any = await userCountAPI();
    return data
})

export const deleteUser : any = createAsyncThunk(
    'users/delete',
     async (id:number)=>{
    const data:any = await deleteUserAPI(id);
    return data
})

export const login : any = createAsyncThunk(
    'users/login',
     async (user:IUser)=>{
    const data:any = await loginAPI(user);
    
    return data
})