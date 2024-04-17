'use client'

import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import Columns from "@/app/components/article/module/article-columns";
import { articleCount, findAllArticles } from '@/app/components/article/service/article.service';
import { getAllArticles, getArtilceCount } from '@/app/components/article/service/article.slice';
import articlesColums from '@/app/components/article/module/article-columns';
import Link from 'next/link';

const cards = [
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];


export default function ArticlesPage({ data }: any){
  const dispatch = useDispatch()
  const allArticles: [] = useSelector(getAllArticles)
  const getArticleCount: number = useSelector(getArtilceCount)

  if (allArticles !== undefined) {
    console.log('allArticles is not undefined')
  } else {
    console.log('allArticles is undefined')
  }

  useEffect(() => {
    dispatch(articleCount())
    dispatch(findAllArticles(1))
  }, [])

  return (<>
     <>
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
    </>
    <h2> Articles</h2>
    <h1>게시글 수 : {getArticleCount}</h1>
    <Link href ="" >글쓰기</Link>
    <div style={{ height: "100%", width: "100%" }}>
      {allArticles && <DataGrid
        rows={allArticles}
        columns={articlesColums()}
        pageSizeOptions={[5, 10, 20]} // 4-1
        checkboxSelection
      />}
    </div>

  </>)
}