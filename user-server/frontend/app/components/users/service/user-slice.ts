'use client'

import { createSlice } from "@reduxjs/toolkit";
import { existsByUsername, findAllUsers, findUserById, login, modifyUser, userCount } from "./user-service";
import { IUser } from "../model/user.model";


const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected:'rejected'
}

const handlePending =(state :any)=> {
 
}
const handleFulfilled =(state :any, {payload}:any) => {
 state.array = payload
}

const handleRejected =(state :any)=> {

}

export interface IAuth {
    message? : string,
    token? : string
}

interface userState  {
    json? : IUser,
    array? : Array<IUser>,
    auth? : IAuth    
    count? : number,
    exsistsByUsername : boolean
}

export const initialState:userState={
    json: {} as IUser,
    array : [],
    auth : {} as IAuth,
    exsistsByUsername : false


}

export const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{},
    extraReducers : builder =>{
        const {pending,rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled,(state :any, {payload}:any) => {state.array = payload})
        .addCase(findUserById.fulfilled, (state :any, {payload}:any) => {state.json = payload}) 
        .addCase(modifyUser.fulfilled, (state :any, {payload}:any) => {state.json = payload}) 
        .addCase(userCount.fulfilled, (state :any, {payload}:any) => {state.count = payload}) 
        .addCase(login.fulfilled, (state :any, {payload}:any) => {state.auth = payload}) 
        .addCase(existsByUsername.fulfilled, (state :any, {payload}:any) => {state.exsistsByUsername = payload}) 
    }
})

export const getAllUsers = (state:any)=>state.user.array;   
export const getUserById =(state:any )=>state.user.json;
export const getUserCount =(state:any )=>state.user.count;
export const getAuth = (state:any )=>state.user.auth;
export const getIdCheck = (state:any )=>state.user.exsistsByUsername;


export const{} = userSlice.actions

export default userSlice.reducer;