import { createAsyncThunk } from "@reduxjs/toolkit";
import { articleCountAPI, deleteArticleAPI, findAllArticlesAPI, findArticleByIdAPI, saveArticleAPI } from "./article.api";
import { IArticle } from "../model/article";

export const findAllArticles : any = createAsyncThunk(
    'articles/findAllArticles',
     async (id:number)=>{
    const data:any = await findAllArticlesAPI(id);
    
    return data
})



export const findArticleById : any = createAsyncThunk(
    'articles/findArticleById',
     async (id:number)=>{
    const data:any = await findArticleByIdAPI(id);
    return data
})
export const deleteArticle : any = createAsyncThunk(
    'articles/deleteArticle',
     async (id:number)=>{
    const data:any = await deleteArticleAPI(id);
    return data
})

export const articleCount : any = createAsyncThunk(
    'articles/articleCount',
     async ()=>{
    const data:any = await articleCountAPI();
    return data
})

export const saveArticle : any = createAsyncThunk(
    'articles/saveArticle',
     async (article:IArticle)=>{
    const data:any = await saveArticleAPI(article);
    return data
})