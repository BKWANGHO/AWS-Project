import { createAsyncThunk } from "@reduxjs/toolkit";
import { articleCountAPI, deleteUserAPI, findAllArticlesAPI, findArticleByIdAPI } from "./article.api";

export const findAllArticles : any = createAsyncThunk(
    'articles/findAllArticles',
     async (page:number)=>{
    const data:any = await findAllArticlesAPI(10);
    
    return data
})

export const findArticleById : any = createAsyncThunk(
    'articles/findArticleById',
     async (id:number)=>{
    const data:any = await findArticleByIdAPI(id);
    return data
})
export const deleteUser : any = createAsyncThunk(
    'articles/deleteUser',
     async (id:number)=>{
    const data:any = await deleteUserAPI(id);
    return data
})

export const articleCount : any = createAsyncThunk(
    'articles/articleCount',
     async ()=>{
    const data:any = await articleCountAPI();
    return data
})