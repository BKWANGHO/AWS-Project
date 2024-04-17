import { instance } from "@/app/components/common/configs/axios-config"


export const findAllArticlesAPI = async (page:number)=>{
try{
    const response = await instance.get('/articles/listAll',{
        params:{page,limit:10}
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

export const deleteUserAPI = async (id:number)=>{
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