'use client'

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { MyTypography, MyTypographyLeft } from '@/app/components/common/style/cell';
import { getUserById } from '@/app/components/users/service/user-slice';
import { deleteUser, findUserById, modifyUser } from '@/app/components/users/service/user-service';
import { IUser } from "@/app/components/users/model/user.model";
import { useRouter } from "next/navigation";
import { PG } from "@/app/components/common/enums/PG";
import { destroyCookie } from "nookies";



export default function usersDetailPage({ params }: any) {

  const dispatch = useDispatch()
  const getUser: IUser = useSelector(getUserById)

  const [dto,setDto] = useState({id:params.id, password : '', name:'',phone :'',job:''});

  useEffect(() => { dispatch(findUserById(params.id)) }, [])

  const handleChange = (e:any) => {
    const {
      target: { value, name }
    } = e;
    setDto(dto => ({ ...dto, [name]: value }));
  };

  const router = useRouter()
  const handleSubmit = ()=> {
    dispatch(modifyUser(dto)) 
    router.push( `${PG.USER}/list`)
  }

const handledelete = ()=>{
  dispatch(deleteUser(params.id))
  .then(()=>{
    destroyCookie(null,'accessToken')
    router.refresh()
    router.push('/')
  })
  .catch(()=>{

  })
}

  return (<>
    <h1>게시판 상세페이지</h1>
    <span> {MyTypographyLeft('ID : '+params.id, "1.5rem")}</span><br />

    <span>{MyTypographyLeft('아이디 : '+getUser.username, "1.5rem")} </span><br />

    <span>{MyTypographyLeft('비밀번호 :', "1.5rem")} <input type="text" placeholder={getUser.password} name="password" onChange={handleChange} /></span><br />
    
    <span>{MyTypographyLeft('이  름 :', "1.5rem")} <input type="text" placeholder={getUser.name} name="name" onChange={handleChange}/> </span><br />

    <span>{MyTypographyLeft('핸드폰 :', "1.5rem")} <input type="text" placeholder={getUser.phone} name="phone" onChange={handleChange}/></span><br />

    <span>{MyTypographyLeft('직업 수정 :', "1.5rem")} <input type="text" placeholder={getUser.job} name="job" onChange={handleChange}/></span><br />

    <span>{MyTypographyLeft('생성일 : '+getUser.regDate, "1.5rem")}</span><br />

    <span>{MyTypographyLeft('수정일 : '+getUser.modDate, "1.5rem")}</span>

    <button type="submit"  onClick={handleSubmit}>수정완료</button><br />
    
    <button type="submit"  onClick={handledelete}>회원탈퇴</button><br />

  </>)

}