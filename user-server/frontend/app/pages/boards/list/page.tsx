'use client'

import CardButton from "@/app/atoms/button/CardButton"
import { IBoard } from "@/app/components/board/model/board"
import { findAllboards } from "@/app/components/board/service/board-service"
import { getAllboards } from "@/app/components/board/service/board-slice"
import { IUser } from "@/app/components/users/model/user.model"
import { jwtDecode } from "jwt-decode"
import { parseCookies } from "nookies"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function BoardCards() {

    const dispatch = useDispatch()
    const allBoards: IBoard[] = useSelector(getAllboards)


    useEffect(() => {
        dispatch(findAllboards(1))
    }, [])

    console.log(parseCookies()?.accessToken ?  jwtDecode<any>(parseCookies()?.accessToken).userId : 0)


    return (<>
    <h1>게시판 목록</h1>
        {allBoards && allBoards.map((v) =>( 
            <CardButton key ={v.id} id = {v.id}
           title= {v.title}
           description={v.description} />
            ))}
    </>
    )
}