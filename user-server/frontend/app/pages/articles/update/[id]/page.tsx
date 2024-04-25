'use client'

import { IArticle } from "@/app/components/article/model/article";
import { saveArticle } from "@/app/components/article/service/article.service";
import { getSaveResult } from "@/app/components/article/service/article.slice";
import { IBoard } from "@/app/components/board/model/board";
import { findAllboards } from "@/app/components/board/service/board-service";
import { getAllboards } from "@/app/components/board/service/board-slice";
import { PG } from "@/app/components/common/enums/PG";
import { MyTypography } from "@/app/components/common/style/cell";
import usersDetailPage from "@/app/pages/users/detail/[id]/page";
import { AttachFile, FmdGood, ThumbUpAlt } from "@mui/icons-material";
import { kMaxLength } from "buffer";
import { write } from "fs";
import { jwtDecode } from "jwt-decode";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function UpdateArticlePage(props: any) {
    const dispatch = useDispatch();
    const boardList = useSelector(getAllboards);

    const router = useRouter();
    
    const {register,handleSubmit, formState:{errors} } = useForm();

    useEffect(()=>{
        dispatch(findAllboards(1))
    
    },[])
    
    const handelCancel = () => { router.back() }

    const onSubmit = (data:any)=>{
        console.log(JSON.stringify(data))
        dispatch(saveArticle(data))
        .then((res:any)=>{
            alert('게시글 작성 완료'+JSON.stringify(res.payload))
            if(res.payload.message==='SUCCESS'){
                router.push(`${PG.ARTICLE}/list/${res.payload.id}`)
            }
        })
        .catch((err:any)=>{

        })
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}  className="max-w-sm mx-auto">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Board</label>
            <select {...register('board',{required:true})}
            id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="board"  
              defaultValue={props.params.id}>
            
                {boardList.map((v:IBoard) =>(<option key={v.id} value={v.id}>{v.content}</option>))}
                {/* {options.map((item)=>(<option key={item.id} title ={item.title}>{item.content}</option>))} */}
            </select>
        
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            {MyTypography('게시글 작성', "1.5rem")}

            <input type="hidden" value={jwtDecode<any>(parseCookies().accessToken).userId} 
            {...register('writer',{required:true})} readOnly />

            <input {...register('title',{required:true,maxLength:30})}
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" 
            placeholder="Title" type="text" name="title"  />
            <textarea {...register('content',{required:true,maxLength:300})}
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" 
            placeholder="Describe everything about this post here" name="content" ></textarea>
           
            <div className="icons flex text-gray-500 m-2">
                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <ThumbUpAlt component={ThumbUpAlt}></ThumbUpAlt>
                </svg>
                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <FmdGood component={FmdGood}></FmdGood>
                </svg>
                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <AttachFile component={AttachFile}></AttachFile>
                </svg>
                <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
            </div>
{/*         
            <div className="buttons flex">
            <div className="btn  overflow-hidden relative w-30 bg-blue-500 text-white p-3 px-8 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
                    onSubmit={handleSubmittt}> Post </div>
                <div className="btn  overflow-hidden relative w-30 bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
                    onSubmit={handelCancel}>Cancel</div>
            </div> */}
            <input type="submit" value="SUBMIT" />
        </div>
        </form>
    </>)
}