"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import CustomButton from '../../ui/CustomButton';
import { useRouter } from 'next/navigation';

type Props = {
    course:any;
}

const ProductCard2 = ({course}: Props) => {
    const router = useRouter()

  return (
    <div className='py-5 bg-white border shadow-md px-5 rounded-lg '>
        <div onClick={()=>router.push(`/course/${course._id}`)} className='w-full h-[250px] rounded-lg relative overflow-hidden cursor-pointer group'>
            <Image src={course?.thumbnail} width={500} height={500} alt="course image" className='w-full group-hover:scale-110 duration-500 h-full object-fill'/>
            <div className=' absolute right-3 shadow-md bottom-3 px-3 py-2 rounded-lg bg-white'>
                <h2 className=' text-[25px] text-primary font-bold'>${course?.price} <span className='text-[15px]  text-lightText'>${course?.estimatedPrice}</span></h2>
            </div>
        </div>
        <div className=' mt-5'>
        <Link href={`/course/${course._id}`}  className=' group-hover:text-white'>
            <h2 className=' text-[18px] font-bold hover:text-primary  duration-500 text-text'>{course?.name.slice(0,50)}...</h2>
        </Link>
        <div className='flex items-center py-3 text-[18px] font-semibold text-lightText justify-between'>
            <h3>{course?.category}</h3>
            <h3>Lesson{course?.courseData?.length}</h3>
        </div>
        <div className=' bg-light w-full h-[1px]'></div>
        </div>
        <div className=' flex items-center pt-4 justify-between'>
            <div className='w-[20px]'>

            </div>
            <CustomButton handelClick={()=>router.push(`/course/${course._id}`)} title='Buy Now' />
        </div>
    </div>
  )
}

export default ProductCard2