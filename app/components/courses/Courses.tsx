"use client"
import Container from '../../utils/Container'
import React, { useState } from 'react'
import CourseLeft from './CourseLeft'



const Courses = ({searchParams}: any) => {
    const [query,setQuery] = useState('')
    console.log("======================",query)


  return (
    <div className='lg:py-[50px] py-5 bg-[#fafafa]'>
        <Container>
            <div className=' flex items-center justify-between gap-8'>
                <div className=' lg:w-[25%] w-full'>
                    <CourseLeft setQuery={setQuery}/>
                </div>
                <div className=' lg:w-[75%] w-full'>

                </div>
            </div>
        </Container>
    </div>
  )
}

export default Courses