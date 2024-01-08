"use client"
import Container from '../../utils/Container'
import React from 'react'
import CourseSearch from './CourseSearch'



const Courses = ({searchParams}: any) => {
    console.log("======================",searchParams)
  return (
    <div className='lg:py-[50px] py-5 bg-[#fafafa]'>
        <Container>
            <div className=' flex items-center justify-between gap-8'>
                <div className=' lg:w-[25%] w-full'>
                    <CourseSearch />
                </div>
                <div className=' lg:w-[75%] w-full'>

                </div>
            </div>
        </Container>
    </div>
  )
}

export default Courses