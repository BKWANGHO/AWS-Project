'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input} from '@mui/material';
import AxiosConfig from "@/app/components/common/configs/axios-config";
import { API } from "@/app/components/common/enums/API";
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { IBoard } from "@/app/components/board/model/board";
import Columns from "@/app/components/board/module/board-columns";
import { getAllboards } from "@/app/components/board/service/board-slice";
import { findAllboards } from "@/app/components/board/service/board-service";
import { StyledDataGrid } from "@/app/components/common/style/board";
import { ClassNames } from "@emotion/react";
import Link from "next/link";

const cards = [
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];

 const boardsPage : NextPage = ({data}:any)=> {
    const dispatch = useDispatch()
    const allboards: [] = useSelector(getAllboards)

    if(allboards !== undefined){
        console.log(allboards)
    
    }else{
        console.log('allboards is undefined')
    }
    
    useEffect(() => {
        dispatch(findAllboards(10))
    }, [])
    
    return (<>
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
        {cards.map((data, index) => {
          return (
            <section
              className="flex-shrink-0 w-full snap-center justify-center items-center"
              key={index}
            >
              <img
                src={data}
                alt="Images to scroll horizontal"
                className="w-full h-[500px]"
              />
            </section>
          );
        })}
      </div>
    </div>
        <h2>게시판목록 Board</h2>
       
        <div style={{ height: "100%", width: "100%" }}>
      {allboards&&<DataGrid // 🔥 4
        rows={allboards}
        columns={Columns()}
        pageSizeOptions={[5,10,20]} // 4-1
        checkboxSelection
      />}
    </div>
    </>)
}
export default boardsPage;