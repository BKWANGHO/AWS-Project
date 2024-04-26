'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { MyTypography, MyTypographyLeft } from '@/app/components/common/style/cell';
import { findArticleById } from '@/app/components/article/service/article.service';
import { getArticleById } from '@/app/components/article/service/article.slice';
import { IArticle } from '@/app/components/article/model/article';
import { useRouter } from 'next/navigation';
import { PG } from '@/app/components/common/enums/PG';
import { useForm } from 'react-hook-form';



export default function articleDetailPage({ params }: any) {

  const router = useRouter()
  const dispatch = useDispatch();
  const findArticle:IArticle = useSelector(getArticleById)

  const {register,handleSubmit, formState:{errors} } = useForm();

  useEffect(() => { dispatch(findArticleById(params.id)) }, [])

  const onSubmit = (data:any)=>{
  console.log(JSON.stringify(data))

  
  }

  return (<>


     <form className="max-w mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div>
        {MyTypography(findArticle.title, "2.5rem")}
      </div>
      <div className="md:flex mb-8">
        {/* <div className="md:w-1/3">
          <legend className="uppercase tracking-wide text-sm">Location</legend>
          <p className="text-xs font-light text-red">This entire section is required.</p>
        </div> */}
        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Title</label>
            <input className="w-full shadow-inner p-4 border-0" type="text" {...register('title', { required: true })} defaultValue={findArticle.title} />
          </div>
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-xs font-bold">Content</label>
            <input className="w-full h-full shadow-inner p-4 border-0" type="text" {...register('content', { required: true })} defaultValue={findArticle.content} />
          </div>
        </div>
      <input type="text" {...register('id', { required: true })} defaultValue={params.id} hidden readOnly />
      <input type="hidden" {...register('writer', { required: true })} defaultValue={findArticle.writer} readOnly />
      </div>
      <div className="flex w-1/2 margin-right:40px">
        <div>
          <button className="btn text-center overflow-hidden relative poinster bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
            onClick={() => router.back()} value="CANCEL" >CANCEL</button>
        </div>
        <div>
          <button className="btn text-center overflow-hidden relative poinster bg-blue-500 text-white p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00">
            <input type="sumit" value="SUBMIT" className="text-center bg-blue-500 text-white"  />
          </button>
        </div>
        <div>
          <button className="btn text-center overflow-hidden relative  bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
            onClick={() => {
              alert("article을 삭제합니다.")
              // dispatch(deleteArticleById(params.id))
              location.reload();
            }} value="DELETE" >DELETE</button>
        </div>
      </div>
    </form>







  
  </>)

}