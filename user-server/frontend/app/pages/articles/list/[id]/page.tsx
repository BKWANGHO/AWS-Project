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
import { findArticlesById } from '@/app/components/board/service/board-service';
import { getAllArticles } from '@/app/components/article/service/article.slice';
import { findAllArticles } from '@/app/components/article/service/article.service';
import MoveButton from '@/app/atoms/button/MoveButton';
import { PG } from '@/app/components/common/enums/PG';


export default function articlesPage(props: any) {

  const dispatch = useDispatch()
  const findArticles: IArticle[] = useSelector(getAllArticles)


  useEffect(() => {
    dispatch(findAllArticles(props.params.id))
  }, [])


  return (<>

    <table className="w-full">
      <thead className='text-center'>
        <tr>
          <td>
            <h1>게시글 목록 </h1>
            <MoveButton text={'글쓰기'} path={`${PG.ARTICLE}/save/${props.params.id}`} />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={4}>
            <div style={{ height: "100%", width: "100%" }}>
              {findArticles && <DataGrid
                rows={findArticles}
                columns={articlesColums()}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
              />}
            </div>
          </td>
        </tr>
      </tbody>
    </table>




  </>)
}