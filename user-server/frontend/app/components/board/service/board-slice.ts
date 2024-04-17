"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { findAllboards, findArticlesById } from "./board-service";
import { IBoard } from "../model/board";


const boardThunks = [findAllboards]


interface BoardState{
    json : IBoard
    array : Array<IBoard>
}

export const initialState:BoardState={
    json : {} as IBoard,
    array :[]
}

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

export const boardSlice = createSlice({
    name : 'boards',
    initialState,
    reducers:{},
    extraReducers : builder=> {
        const {pending,rejected} = status;

        builder
        .addCase(findAllboards.fulfilled,(state :any, {payload}:any) => {state.array = payload})
        .addCase(findArticlesById.fulfilled, (state :any, {payload}:any) => {state.array = payload}) 
    }
})
export const getAllboards =(state:any )=> state.board.array;
export const getSingleBoard =(state:any )=> state.board.array;



export const{} = boardSlice.actions

export default boardSlice.reducer;