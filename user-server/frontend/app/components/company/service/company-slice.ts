import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllArticles } from './company-service';
import { initialState } from './company-init';

const articleThunks = [fetchAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {
    state.array = payload

}

const handlePending = (state: any) => {
  
}
const handleRejected = (state: any) => {
  
}

export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(fetchAllArticles.fulfilled, handleFulfilled)
  
    }
})
export const getAllArticles = (state: any) => {
    return state.article.array;
}

export const {} = articleSlice.actions

export default articleSlice.reducer;