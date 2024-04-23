import instance  from "@/app/components/common/configs/axios-config"
import { IUser } from "../model/user.model"


export const findAllUsersAPI = async (page:number)=>{

    try {
        const response = await instance().get('/users/list',{
            params:{page,limit:10}
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const findUserByIdAPI = async (id:number)=>{
    try{
        const response = await instance().get('/users/detail',{
            params:{id}
        })
    return response.data
    }catch(error){
    console.log(error)
    }}
    
export const modifyUserAPI = async (dto:IUser)=>{
    console.log(dto)
    try{
        const response = await instance().put('/users/modify', dto)
    return response.data
    }catch(error){
    console.log(error)
    }}
    
export const userCountAPI = async ()=>{
    try{
            const response = await instance().get('/users/count',{
              
            })
        return response.data
        }catch(error){
        console.log(error)
        }}

export const deleteUserAPI = async (id:number)=>{
    try{
        const response = await instance().get('/users/delete',{
            params:{id}
        })

        return response.data
    }catch(error){
        console.log(error)
        }}

export const loginAPI = async (user:IUser)=>{
    
    try{
        const response = await instance().post('/auth/login',user)

        return response.data
    }catch(error){
        console.log(error)
        }}        


export const existsByUsernameAPI = async (username:string)=>{
    try{
        const response = await instance().get('/auth/exists-Username',{
            params: {username}})
        return response.data
    }catch(error){
    console.log(error)
    }}        
    
export const logoutAPI = async () => {
    try{
        const response = await instance().get('/users/logout',)
        return response.data
    }catch(error){
        console.log(error)
    }
}