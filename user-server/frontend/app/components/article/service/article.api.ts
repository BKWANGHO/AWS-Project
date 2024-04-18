import { instance } from "@/app/components/common/configs/axios-config"
import { IArticle } from "../model/article"


export const findAllArticlesAPI = async (id:number)=>{
    try{
    const response = await instance.get('/articles/list',{
        params:{id}
    })
    return response.data
    }catch(error){
    console.log(error)
    }}


export const findArticleByIdAPI = async (id:number)=>{
    try{
        const response = await instance.get('/articles/detail',{params:{id}})
        return response.data
    }catch(error){
    console.log(error)
    }}

export const deleteArticleAPI = async (id:number)=>{
    try{
        const response = await instance.get('/articles/delete',{params:{id}})
        return response.data
    }catch(error){
        console.log(error)
    }}
 
export const articleCountAPI = async ()=>{
    try{
        const response = await instance.get('/articles/count',{})
        return response.data
    }catch(error){
    console.log(error)
    }}        
export const saveArticleAPI = async (article:IArticle)=>{
    try{
        const response = await instance.post('/articles',article)

        console.log("api"+JSON.stringify( response.data))
        return response.data.message
    }catch(error){
        console.log(error)
    }}        