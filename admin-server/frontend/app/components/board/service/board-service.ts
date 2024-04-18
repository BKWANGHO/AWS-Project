import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllboardsAPI, findArticlesByIdAPI } from "./board-api";

export const findAllboards : any = createAsyncThunk(
    'boards/findAllboards',
     async (page:number)=>{
    const data:any = await findAllboardsAPI(1);
    return data
})

export const findArticlesById : any = createAsyncThunk(
    'boards/findArticlesById',
     async (id:number)=>{
    const data:any = await findArticlesByIdAPI(id);
    return data
})

