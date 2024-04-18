'use client'

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import Columns from "@/app/components/board/module/board-columns";
import { getAllboards, getSingleBoard } from "@/app/components/board/service/board-slice";
import { MyTypography } from '@/app/components/common/style/cell';
import { IArticle } from '@/app/components/article/model/article';
import articlesColums from '@/app/components/article/module/article-columns';
import { IBoard } from '@/app/components/board/model/board';
import { findArticlesById } from '@/app/components/board/service/board-service';


export default function boardsDetailPage(props:any){
   
  const dispatch = useDispatch()
  const findBoard:IArticle[] = useSelector(getSingleBoard)

  console.log(JSON.stringify(findBoard))

  useEffect(() => {
    dispatch(findArticlesById(props.params.id))
  }, [findBoard])



    return (<>
        <h1>{} 게시판</h1>
        
        <div style={{ height: "100%", width: "100%" }}>
      {findBoard && <DataGrid
        rows={findBoard}
        columns={articlesColums()}
        pageSizeOptions={[5, 10, 20]} // 4-1
        checkboxSelection
      />}
    </div>
    </>)
}