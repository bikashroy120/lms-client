"use client"

import { useGetAllCategoryQuery } from '../../../redux/features/category/categoryApi';
import React from 'react'

type Props = {}

const CourseCategory = (props: Props) => {
    const { data } = useGetAllCategoryQuery(
        "",{refetchOnMountOrArgChange:true}
      );
  return (
    <div className=' bg-white border p-5 rounded-lg shadow-sm'>
    <h2 className=' text-text text-[23px] font-semibold'>Course Categories</h2>
    <div className=' mt-3 flex flex-col gap-3'>
        {data?.category?.map((item:any,index:number)=>(
            <div key={index} className=' flex items-center gap-3'>
                <div className='w-[8px] h-[8px] rounded-full bg-primary'></div>
                <h3 className='text-base text-lightText font-normal'>{item?.title}</h3>
            </div>
        ))}
    </div>
</div>
  )
}

export default CourseCategory