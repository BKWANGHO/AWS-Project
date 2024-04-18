"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { articleCount, findAllArticles, findArticleById, saveArticle} from "./article.service";
import { IArticle } from "../model/article";


const articleThunks = [findAllArticles]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected:'rejected'
}

interface ArticleState{
    json : IArticle
    array : Array<IArticle>
    message : string
}



export const initialState:ArticleState={
    json : {} as IArticle,
    array :[],
    message:""
}

const handlePending =(state :any)=> {
 
}
const handleFulfilled =(state :any, {payload}:any) => {
 state.array = payload
}

const handleRejected =(state :any)=> {

}

export const articleSlice = createSlice({
    name : 'articles',
    initialState,
    reducers:{},
    extraReducers : builder=> {
        const {pending,rejected} = status;

        builder
        .addCase(findAllArticles.fulfilled, (state :any, {payload}:any) => {state.array = payload}) 
        .addCase(findArticleById.fulfilled, (state :any, {payload}:any) => {state.json = payload}) 
        .addCase(articleCount.fulfilled, (state :any, {payload}:any) => {state.count = payload}) 
        .addCase(saveArticle.fulfilled, (state :any, {payload}:any) => {state.message = payload}) 
    
        
    }  
})
export const getAllArticles =(state:any )=> state.article.array;
export const getArticleById =(state:any )=> state.article.json;
export const getArtilceCount =(state:any )=> state.article.count;
export const getSaveResult =(state:any )=> state.article.message;

export const{} = articleSlice.actions

export default articleSlice.reducer;