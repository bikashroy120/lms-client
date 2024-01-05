"use client"

import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react';
import CustomButton from '../ui/CustomButton';

type Props = {
    courseData:any;
}

const CourseBook = ({courseData}: Props) => {
  return (
    <div className=' bg-white border p-5 rounded-lg shadow-sm'>
        <div className=' relative h-[280px] w-full'>
            <Image src={courseData?.thumbnail} width={500} height={500} alt='course image' className='w-full object-fill h-full rounded-lg'/>
            <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black/50 text-white w-[100px] h-[100px] rounded-full flex items-center justify-center'>
                <Icon icon="gravity-ui:play-fill" className=' text-[50px]'/>
            </div>
        </div>
        <div className=' flex items-center justify-center mt-5'>
            <button className={`py-2 px-5 font-semibold flex items-center justify-center text-[20px] w-full rounded-full border-[3px] duration-300 border-green-500 bg-green-500 text-white hover:bg-transparent hover:text-green-500  `}> Enroll Course </button>
        </div>
    </div>
  )
}

export default CourseBook