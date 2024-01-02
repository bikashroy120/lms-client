"use client"

import Container from '@/app/utils/Container'
import React from 'react'
import { Icon } from '@iconify/react';
import { Rate } from 'antd';

const CourseDetailsTop = ({courseData}: any) => {
  return (
    <div className='details_background'>
        <div className=' w-full text-white h-full py-[65px] bg-black/70'>
          <Container>
            <div className=' lg:w-[70%] w-full'>
                <h2 className=' text-white lg:text-[45px] text-[25px] font-semibold font-Poppins'>{courseData?.name}</h2>
                <div className=' flex items-center gap-3 mt-4 flex-wrap'>
                    <div className=' flex items-center gap-2 text-[20px] font-semibold'>
                        <Icon icon="ion:book-outline" />
                        <h3>{courseData?.courseData?.length} Lessons</h3>
                    </div>
                    <div className=' flex items-center gap-2 text-[20px] font-semibold'>
                        <Icon icon="carbon:skill-level" />
                        <h3>{courseData?.courseData?.length} Level</h3>
                    </div>
                    <div>
                    <Rate disabled defaultValue={5} />
                    </div>
                </div>
            </div>
          </Container>
        </div>
    </div>
  )
}

export default CourseDetailsTop