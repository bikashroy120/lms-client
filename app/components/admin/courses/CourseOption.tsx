import React from 'react'
import { IoMdCheckmark } from 'react-icons/io';

type Props = {
    active:number,
    setActive:(active:number)=>void;
}

const CourseOption = ({active,setActive}: Props) => {

    const options = [
        "Course Information",
        "Course Options",
        "Course Content",
        "Course Preview"
    ]

  return (
    <div className=''>
        {options.map((option:any,index:number)=>{
            return (
                <div key={index} className='w-full flex py-5'>
                <div className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
                    active + 1 > index ? " bg-blue-500 text-white" : " bg-[#384766]"
                } relative`}>
                    <IoMdCheckmark className={" text-[25px]"}/>
                {
                    index !== options.length-1 && (
                        <div className={` absolute h-[30px] w-1 ${
                            active + 1 > index ? " bg-blue-500" : " bg-[#384766]"
                        } bottom-[-100%]`} />
                    )
                }
                </div>
                <h5
                    className={`pl-3 text-[20px] ${
                        active === index ? "text-black" : " text-black"
                    }`}
                >
                    {option}
                </h5>
            </div>
            )
        })}
    </div>
  )
}

export default CourseOption