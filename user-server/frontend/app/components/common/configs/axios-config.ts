import axios, { AxiosInstance } from "axios"
import { parseCookies } from "nookies";
import { deflate } from "zlib";



export default function instance(){
const instance = axios.create({baseURL: process.env.NEXT_PUBLIC_API_URL})
setInterceptor(instance)
return instance
}

// export default function AxiosConfig(){
//     return{
//         headers: {
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/json",
//             Authorization: `Bearer blah ~`,
//             "Access-Control-Allow-Origin": "*",
//         }
//     }
// } 고정된 값 


 // 변경할수 있게끔 코딩 
 export const setInterceptor = (inputInstance:AxiosInstance) => {
    inputInstance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json"
        config.headers["Authorization"] = `Bearer ${parseCookies().accessToken}`
        return config
    }, (error) => {
        console.log("AXIOS 인터셉터 에러 발생 : " + error)
        return Promise.reject(error)
    })
    inputInstance.interceptors.response.use(
        (response) => {
            if(response.status === 404) console.log("AXIOS 인터셉터 404 발생")
            return response
        }
    )
    return inputInstance
}

