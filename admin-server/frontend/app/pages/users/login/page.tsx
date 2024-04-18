'use client'

import { API } from "@/app/components/common/enums/API"
import { PG } from "@/app/components/common/enums/PG"
import AxiosConfig from "@/app/components/common/configs/axios-config"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { NextPage } from "next"


 const LoginPage :NextPage =() =>{

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e: any) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const router = useRouter();

    const handleSubmit = () => {
        axios.post(`${API.SERVER}/login`, { username, password },AxiosConfig())
            .then(res => {  
                const messege = res.data.messege
                alert(messege)
                if(messege === 'SUCCESS'){
                    router.push(`${PG.BOARD}/articles/writer`)
                 }else if (messege === 'FAIL'){

                 }else if (messege === 'WRONG.PASSWORD'){

                 }else{

                 }
                }
                
                )}
    return (<>
        <h2>로그인 하세요</h2>
        <h3>아이디를 입력하세요</h3>
        <input type="text" onChange={handleUsername} />
        <h3>비밀번호를 입력하세요</h3>
        <input type="text" onChange={handlePassword} /><br />
        <button onClick={handleSubmit}>전송</button>

    </>)
}
export default LoginPage