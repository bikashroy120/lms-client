import React from 'react'

type Props = {
    text:string
}

const CourseOverView = ({text}: Props) => {
  return (
    <div className=' bg-white border p-5 rounded-lg shadow-sm'>
        <h2 className=' text-text text-[23px] font-semibold'>Overview</h2>
        <div className=' mt-3'>
            <p className=' text-base text-lightText font-normal'>{text}</p>
        </div>
    </div>
  )
}

export default CourseOverView