'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { MyTypography } from '@/app/components/common/style/cell';
import { deleteUser, findArticleById } from '@/app/components/article/service/article.service';
import { getArticleById } from '@/app/components/article/service/article.slice';
import { IArticle } from '@/app/components/article/model/article';
import { useRouter } from 'next/navigation';
import { PG } from '@/app/components/common/enums/PG';



export default function articleDetailPage({ params }: any) {

  const dispatch = useDispatch();
  const findArticle:IArticle = useSelector(getArticleById)

  useEffect(() => { dispatch(findArticleById(params.id)) }, [])

  const router = useRouter()
  const handledelete = ()=>{
    dispatch(deleteUser(params.id))
    // router.push( `${PG.USER}/list`)
  }

  return (<>
    <h1>게시글 상세페이지</h1>
    <span>ID : {MyTypography(params.id, "1.2rem")}</span>
    <span>제목 : {MyTypography(findArticle.title, "1.2rem")}</span>
    <span>내용 : {MyTypography(findArticle.content, "1.2rem")}</span>
    <span>작성자 : {MyTypography(findArticle.writer, "1.2rem")}</span>
    <span>생성일 : {MyTypography(findArticle.regDate, "1.2rem")}</span>
    <span>수정일 : {MyTypography(findArticle.modDate, "1.2rem")}</span>


    <button type="submit"  onClick={handledelete}>회원탈퇴</button><br />
  </>)

}