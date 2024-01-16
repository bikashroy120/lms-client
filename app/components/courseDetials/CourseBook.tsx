"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import useAuth from '../hooks/useAuth';
import { useCreateOrderMutation } from '../../../redux/features/order/orderApi';
import toast from 'react-hot-toast';
import { redirect, useRouter } from 'next/navigation';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';

type Props = {
    courseData:any;
}

const CourseBook = ({courseData}: Props) => {
    const auth =  useAuth()
    const router = useRouter()
    const [loadUser, setLoadUser] = useState(false);
    const {} = useLoadUserQuery(undefined, { skip: loadUser ? false : true });
    const [createOrder,{isError,data,error,isSuccess,isLoading}] = useCreateOrderMutation()


    useEffect(()=>{
        if(isSuccess){
          const message = data?.message || "order create success"
          toast.success(message)
          setLoadUser(true)
          router.push(`/access-course/${courseData?._id}`)
        }
        if(error){
          if("data" in error){
            const errorData = error as any;
            toast.error(errorData.data.message)
          }
        }
      },[isSuccess,error])


    const handelOrder = async()=>{
        if(!auth){
            toast.error("Please login first")
        }

        const data = {
            courseId:courseData?._id,
            payment_info:"paid" 
        }
        await createOrder(data)
    }

  return (
    <div className=' bg-white border p-5 rounded-lg shadow-sm'>
        <div className=' relative h-[280px] w-full'>
            <Image src={courseData?.thumbnail} width={500} height={500} alt='course image' className='w-full object-fill h-full rounded-lg'/>
            <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black/50 text-white w-[100px] h-[100px] rounded-full flex items-center justify-center'>
                <Icon icon="gravity-ui:play-fill" className=' text-[50px]'/>
            </div>
        </div>
        <div className=' flex items-center justify-center mt-5'>
            <button onClick={handelOrder} className={`py-2 px-5 font-semibold flex items-center justify-center text-[20px] w-full rounded-full border-[3px] duration-300 border-green-500 bg-green-500 text-white hover:bg-transparent hover:text-green-500  `}>{isLoading? "Loading..." :"Enroll Course "}</button>
        </div>
    </div>
  )
}

export default CourseBook