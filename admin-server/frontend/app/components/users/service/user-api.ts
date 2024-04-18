import { instance } from "@/app/components/common/configs/axios-config"
import { IUser } from "../model/user.model"


export const findAllUsersAPI = async (page:number)=>{

    try {
        const response = await instance.get('/users/list',{
            params:{page,limit:10}
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const findUserByIdAPI = async (id:number)=>{
    try{
        const response = await instance.get('/users/detail',{
            params:{id}
        })
    return response.data
    }catch(error){
    console.log(error)
    }}
    
export const modifyUserAPI = async (dto:{})=>{
    console.log(dto)
    try{
        const response = await instance.put('/users/modify', dto)
    return response.data
    }catch(error){
    console.log(error)
    }}
    
export const userCountAPI = async ()=>{
    try{
            const response = await instance.get('/users/count',{
              
            })
        return response.data
        }catch(error){
        console.log(error)
        }}

export const deleteUserAPI = async (id:number)=>{
    try{
        const response = await instance.get('/users/delete',{
            params:{id}
        })

        return response.data
    }catch(error){
        console.log(error)
        }}

export const loginAPI = async (user:IUser)=>{
    
    try{
        const response = await instance.post('/users/login',user)

        return response.data
    }catch(error){
        console.log(error)
        }}        