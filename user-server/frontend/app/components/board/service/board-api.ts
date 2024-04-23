
import  instance  from "@/app/components/common/configs/axios-config"


export const findAllboardsAPI = async (page:number)=>{

try{
    const response = await instance().get('/boards/list',{
        params:{page,size:10,limit:10}
    })
return response.data
}catch(error){
console.log(error)

}}


export const findArticlesByIdAPI = async (id:number)=>{
    try{
        const response = await instance().get('/articles/list',{
            params:{id}
        })
    return response.data
    }catch(error){
    console.log(error)
    }}