"use client"

import { useCreateCategoryMutation, useGetAllCategoryQuery } from '@/redux/features/category/categoryApi'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import CategoryCart from './CategoryCart'

type Props = {}

const AddCategory = (props: Props) => {
  const [title,setTitle] = useState("")
  const [createCategory,{isLoading,isError,isSuccess,error}] = useCreateCategoryMutation()
  const {data,refetch} = useGetAllCategoryQuery({},{refetchOnMountOrArgChange:true})

  useEffect(()=>{
    if(isSuccess){
      const message = "Category add success"
      toast.success(message)
      setTitle("")
      refetch()
    }
    if(error){
      if("data" in error){
        const errorData = error as any;
        toast.error(errorData.data.message)
      }else{
        console.log(error)
      }
    }
  },[isSuccess,error])

  const handelSubmit = async()=>{

    if(!title){
      return toast.error("give a title");
    }
    const data = {
      title:title,
    }

    await createCategory(data)
  }

  console.log(data)

  return (
    <div className=' w-full bg-white shadow-md p-5 rounded-md font-Poppins'>
    <h2 className='text-xl font-medium'> Add Category</h2>

    <div className=' mt-5 flex items-center gap-3'>
        <input value={title} onChange={(e:any)=>setTitle(e.target.value)} type="text" className=" w-full py-3 px-3 border bg-transparent  rounded-lg border-gray-400 focus:outline-blue-500" />
        <button onClick={()=>handelSubmit()} className=" py-3 px-3 bg-green-500 rounded-md text-white font-semibold text-base">{isLoading ? "Loading..." : "add"}</button>
    </div>

    <div className=' mt-5'>
        <h2>Category list </h2>
        <div className=' flex flex-col gap-2 mt-4'>
            {
              data?.category?.map((cat:any,index:number)=>(
                <CategoryCart key={index} item={cat} refetch={refetch}/>
              ))
            }
        </div>
    </div>
</div>
  )
}

export default AddCategory